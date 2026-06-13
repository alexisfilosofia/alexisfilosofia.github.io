# School Enrollment and Geospatial Analysis

A privacy-preserving portfolio project based on quantitative and geospatial analysis of historical school enrollment records.

This repository presents a sanitized version of an institutional analytics workflow. It combines enrollment trends, age distributions, course-level patterns, spatial concentration analysis, distance-to-school estimation, and aggregate sociodemographic indicators.

## Project goals

The project shows how Python can be used to transform fragmented institutional records into analytical outputs that support historical, educational and territorial interpretation.

The analysis focuses on:

- annual enrollment volume;
- age composition by year;
- age dispersion and outlier detection;
- entry course distribution by year;
- geospatial distribution of students;
- distance-to-school patterns;
- aggregate guardian nationality frequencies;
- privacy-aware reporting of sensitive educational data.

## Data privacy

The original datasets are not included.

They may contain sensitive institutional and student-level information such as names, addresses, family or guardian attributes and enrollment records. This public version includes only:

- sanitized notebooks;
- aggregate outputs;
- methodological documentation;
- a screenshot guide for adding public-safe visual outputs.

No raw student-level dataset is published in this repository.

## Selected outputs

The project documents the following analytical outputs:

### 1. Annual enrollment volume

Annual count of student records by registry year. This output summarizes historical enrollment volume and supports a first reading of institutional growth or variation.

### 2. Age-range composition by year

Stacked age-range analysis by registry year. This output shows changes in the age composition of the enrollment records.

### 3. Age distribution and outlier detection

Boxplot-based analysis of age by year. This output allows comparison of median age, dispersion and outlier cases.

### 4. Entry course frequency by year

The public version includes the aggregated course-year table as CSV and HTML:

- [`assets/tables/course_year_heatmap_table.csv`](assets/tables/course_year_heatmap_table.csv)
- [`assets/tables/course_year_heatmap_table.html`](assets/tables/course_year_heatmap_table.html)

This output supports the analysis of how student entry patterns vary across years and courses.

### 5. Distance-to-school distribution

Aggregate histogram of approximate distances between student residences and the institution. This output is useful for studying accessibility and territorial reach without publishing addresses.

### 6. Guardian nationality distribution

Aggregate frequency distribution of guardian nationality. This output is included only at a summarized level.

## Screenshot policy

Public screenshots should be added only after review. Do not upload images showing:

- student names;
- exact addresses linked to individuals;
- Google Drive paths;
- personal folders;
- row-level sensitive records;
- exact point maps crossed with sensitive demographic categories.

See [`assets/screenshots/README.md`](assets/screenshots/README.md) for the screenshot guide.

## Repository structure

```text
school-enrollment-geospatial-analysis/
│
├── README.md
├── requirements.txt
├── LICENSE
├── .gitignore
│
├── assets/
│   ├── screenshots/
│   └── tables/
│
├── data/
│   └── README.md
│
├── docs/
│   ├── methodology.md
│   └── portfolio_description.md
│
└── notebooks/
    ├── 01_quantitative_enrollment_analysis_sanitized.ipynb
    └── 02_geospatial_analysis_sanitized.ipynb
```

## Technologies

- Python
- Pandas
- NumPy
- Matplotlib
- Folium
- GeoPandas
- Geopy
- Jupyter / Google Colab

## Skills demonstrated

- Data cleaning and normalization
- Educational analytics
- Exploratory data analysis
- Time-series style institutional analysis
- Geospatial analysis
- Distance estimation
- Aggregate sociodemographic analysis
- Data visualization
- Privacy-aware portfolio preparation

## How to use this repository

The notebooks are sanitized methodological versions. They document the analytical workflow without exposing the original sensitive files.

To adapt the project to another dataset:

1. Place anonymized or synthetic files in a local `data/` folder.
2. Adjust the data loading cells in the notebooks.
3. Keep row-level sensitive data out of public commits.
4. Export only aggregate tables, charts or anonymized spatial summaries.

## Ethical note

Educational and geospatial data can be sensitive, even when names are removed. Locations, nationality, family roles and institutional records can become identifying when combined.

For that reason, this repository is designed as a public portfolio version rather than a full data release.