const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432, // default PostgreSQL port
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const COUNTRIES_API_BASE_URL = process.env.COUNTRIES_API_BASE_URL || 'https://restcountries.com/v3.1';

app.get('/api/healthcheck', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ status: 'ok', dbConnected: result.rows[0]['?column?'] === 1 });
  } catch (err) {
    console.error('Database connection error:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.get('/api/destinations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM destinations ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching destinations:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

app.post('/api/destinations', async (req, res) => {
  const { country } = req.body;
  try {
    const response = await axios.get(`${COUNTRIES_API_BASE_URL}/name/${country}`);
    const countryInfo = response.data[0];
    
    const result = await pool.query(
      'INSERT INTO destinations (country, capital, population, region) VALUES ($1, $2, $3, $4) RETURNING *',
      [country, countryInfo.capital[0], countryInfo.population, countryInfo.region]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding destination:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

app.delete('/api/destinations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM destinations WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error('Error deleting destination:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Database host: ${process.env.DB_HOST}`);
  console.log(`Database name: ${process.env.DB_NAME}`);
  console.log(`Countries API base URL: ${COUNTRIES_API_BASE_URL}`);
});