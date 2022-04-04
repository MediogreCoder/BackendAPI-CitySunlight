# Annual Sunlight by City API

This REST API contains major cities and their average Sunlight by hours per month. Cities can be searched using their IDs and City names as well as their countries.

Seed DB with npm db:seed or node server/SunlightInfo/Seed/data.js

## Fields

- id: Record ID
- City: City Name
- Country: City Country
- Jan: Hours of Sunlight in January
- Feb: Hours of Sunlight in February
- Mar: Hours of Sunlight in March
- Apr: Hours of Sunlight in April
- May: Hours of Sunlight in May
- Jun: Hours of Sunlight in June
- Jul: Hours of Sunlight in July
- Aug: Hours of Sunlight in August
- Sep: Hours of Sunlight in September
- Oct: Hours of Sunlight in October
- Nov: Hours of Sunlight in November
- Dec: Hours of Sunlight in December
- Year: Hours of Sunlight in a Year

# API Paths

## Get /Sunlight

will return all records of cities in the API.

## POST /sunlight/:City

will create record with city name

## Get /sunlight/:Country

will find country by name

## GET /sunlight/cityname/:City

will find city by name

## GET /sunlight/:id

will find city by id

## PUT /sunlight/update/:id

will update by id

## PUT /sunlight/delete/:id

will delete by id
