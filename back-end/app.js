'use strict'

const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan');

const app = express();
app.use(JSON)
app.use(cors());
app.use(morgan());