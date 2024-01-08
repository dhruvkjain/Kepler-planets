# Habitable Planets found by NASA's KEPLER mission.
> The Kepler Mission, a NASA discovery mission launched on 6th March 2009, was the first space mission dedicated to the search for Earth-sized and smaller planets in the habitable zone of other stars in our neighborhood of the galaxy.


---
I have created an stream to read data from csv file and then piped it to csv-parse stream where data is parsed and i got my planets objects.

---

### I have used the csv data of all planets discovered on the KEPLER mission provided by NASA and constrained them under following conditions to check whether the planet is habitable : 
- Exoplanet Archive Disposition is CONFIRMED or not.
- Insolation Flux [Earth flux] > 0.36 
- Insolation Flux [Earth flux] < 1.11
- Planetary Radius [Earth radii] < 1.6


### The OUTPUT of the program came out to be :

```javascript
[
  'Kepler-1652 b',
  'Kepler-1410 b',
  'Kepler-296 f',
  'Kepler-442 b',
  'Kepler-296 e',
  'Kepler-1649 b',
  'Kepler-62 f',
  'Kepler-452 b'
]
Total 8 habitable planets were found by KEPLER.
```

# FUN-FACT : Kepler-442 b is considered most habitable planet(even better than our own EARTH).

