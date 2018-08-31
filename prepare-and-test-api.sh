#!/usr/bin/env bash

# mkdir db
npm install
npm run migrate
npm run seed
npm run start