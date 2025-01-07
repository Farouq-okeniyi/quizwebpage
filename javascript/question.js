let question = [
    {
      numb: 1,
      question: "What is the primary purpose of geodetic surveying?",
      Options: ["To measure land parcels", "To determine precise positions on the Earth's surface", "To map local terrains", "To measure elevations"],
      answer: "To determine precise positions on the Earth's surface"
    },
    {
      numb: 2,
      question: "What does GPS stand for in geoinformatics?",
      Options: ["General Positioning System", "Global Positioning System", "Geospatial Positioning Survey", "Global Practical Surveying"],
      answer: "Global Positioning System"
    },
    {
      numb: 3,
      question: "Which of the following is not a component of GIS (Geographic Information System)?",
      Options: ["Hardware", "Software", "Data", "Arithmetic Calculations"],
      answer: "Arithmetic Calculations"
    },
    {
      numb: 4,
      question: "What is the main difference between a plane survey and a geodetic survey?",
      Options: ["A plane survey considers the curvature of the Earth", "A geodetic survey assumes the Earth is flat", "A plane survey assumes the Earth is flat", "A geodetic survey does not require any measurements"],
      answer: "A plane survey assumes the Earth is flat"
    },
    {
      numb: 5,
      question: "In the context of geoinformatics, what is remote sensing primarily used for?",
      Options: ["Mapping digital terrains", "Collecting data through satellite or aerial sensors", "Surveying land parcels", "Conducting legal land surveys"],
      answer: "Collecting data through satellite or aerial sensors"
    },
    {
      numb: 6,
      question: "What is a datum in surveying?",
      Options: ["A type of survey instrument", "A reference point or surface used for measurements", "A software tool for analysis", "A method of positioning in GIS"],
      answer: "A reference point or surface used for measurements"
    },
    {
      numb: 7,
      question: "What does the term 'coordinate system' refer to in geoinformatics?",
      Options: ["A system used to arrange survey equipment", "A method of classifying data in GIS", "A mathematical framework for determining locations", "A tool for creating 3D models"],
      answer: "A mathematical framework for determining locations"
    },
    {
      numb: 8,
      question: "What is the purpose of a Total Station in surveying?",
      Options: ["To calculate areas", "To measure angles and distances electronically", "To create digital terrain models", "To process satellite data"],
      answer: "To measure angles and distances electronically"
    },
    {
      numb: 9,
      question: "Which of the following is the most common projection used for large-scale maps?",
      Options: ["Mercator Projection", "Transverse Mercator Projection", "Robinson Projection", "Albers Equal Area Projection"],
      answer: "Transverse Mercator Projection"
    },
    {
      numb: 10,
      question: "In a GPS system, what is the primary role of the control segment?",
      Options: ["To receive signals from satellites", "To send corrections to ground receivers", "To calculate the location of a GPS receiver", "To provide power to GPS satellites"],
      answer: "To send corrections to ground receivers"
    },
    {
      numb: 11,
      question: "Which software is commonly used for creating and analyzing GIS data?",
      Options: ["AutoCAD", "ArcGIS", "Photoshop", "SketchUp"],
      answer: "ArcGIS"
    },
    {
      numb: 12,
      question: "What is the primary function of a GIS buffer zone?",
      Options: ["To increase the accuracy of survey data", "To create a zone of protection around a specific feature", "To merge data layers", "To represent a distance between two features"],
      answer: "To create a zone of protection around a specific feature"
    },
    {
      numb: 13,
      question: "What is the main purpose of LiDAR in geoinformatics?",
      Options: ["Mapping digital terrain models", "Conducting legal surveys", "Creating 3D topographical maps", "Collecting weather data"],
      answer: "Creating 3D topographical maps"
    },
    {
      numb: 14,
      question: "What does the term 'GPS accuracy' primarily depend on?",
      Options: ["The location of the receiver", "The number of satellites in view", "The color of the receiver", "The altitude of the receiver"],
      answer: "The number of satellites in view"
    },
    {
      numb: 15,
      question: "In land surveying, what does a 'benchmark' represent?",
      Options: ["A reference point of known elevation", "A point to begin survey calculations", "A tool for measuring angles", "A GPS satellite used for triangulation"],
      answer: "A reference point of known elevation"
    },
    {
      numb: 16,
      question: "What is a 'geoid' in geoinformatics?",
      Options: ["A global reference system", "The Earth's shape as a reference for elevation", "A type of coordinate system", "A digital terrain model"],
      answer: "The Earth's shape as a reference for elevation"
    },
    {
      numb: 17,
      question: "Which of the following surveying techniques does NOT involve the use of GPS?",
      Options: ["Geodetic Surveying", "Aerial Photogrammetry", "Triangulation", "GPS Surveying"],
      answer: "Aerial Photogrammetry"
    },
    {
      numb: 18,
      question: "What does 'DEM' stand for in geoinformatics?",
      Options: ["Digital Elevation Model", "Dynamic Earth Mapping", "Data Evaluation Method", "Digital Environmental Model"],
      answer: "Digital Elevation Model"
    },
    {
      numb: 19,
      question: "In the context of GIS, what is vector data primarily used for?",
      Options: ["Representing data in raster format", "Storing coordinates of points, lines, and polygons", "Creating aerial maps", "Conducting remote sensing analysis"],
      answer: "Storing coordinates of points, lines, and polygons"
    },
    {
      numb: 20,
      question: "Which surveying instrument is most commonly used for determining precise vertical measurements?",
      Options: ["Theodolite", "Total Station", "Level", "Tachymeter"],
      answer: "Level"
    },
    {
      numb: 21,
      question: "What is the purpose of a 'theodolite' in surveying?",
      Options: ["To measure vertical angles", "To measure horizontal and vertical angles", "To measure distance", "To calculate areas of land"],
      answer: "To measure horizontal and vertical angles"
    },
    {
      numb: 22,
      question: "In surveying, what does 'azimuth' refer to?",
      Options: ["The angle between two points on a map", "The distance between two points", "The direction of a point relative to north", "The height of a location"],
      answer: "The direction of a point relative to north"
    },
    {
      numb: 23,
      question: "What is an example of a passive remote sensing system?",
      Options: ["LiDAR", "GPS", "Satellite imagery", "Ground penetrating radar"],
      answer: "Satellite imagery"
    },
    {
      numb: 24,
      question: "In photogrammetry, what is meant by 'stereo imagery'?",
      Options: ["Two-dimensional imagery from one perspective", "3D imagery created from two different angles", "Imagery with enhanced color contrast", "Images captured by multiple drones"],
      answer: "3D imagery created from two different angles"
    },
    {
      numb: 25,
      question: "What is a 'spatial join' in GIS?",
      Options: ["Combining data based on common attributes", "Linking data based on geographical location", "Merging two maps into one", "Analyzing topographic data"],
      answer: "Linking data based on geographical location"
    },
    {
      numb: 26,
      question: "What is the main use of geospatial data in urban planning?",
      Options: ["To determine the height of buildings", "To analyze the topography and infrastructure of an area", "To measure traffic patterns", "To measure the temperature of a region"],
      answer: "To analyze the topography and infrastructure of an area"
    },
    {
      numb: 27,
      question: "What is the significance of the UTM coordinate system?",
      Options: ["It is a local coordinate system used for navigation", "It divides the Earth into 60 zones for precise mapping", "It is used for creating global databases", "It measures the curvature of the Earth"],
      answer: "It divides the Earth into 60 zones for precise mapping"
    },
    {
      numb: 28,
      question: "Which of the following is NOT a type of GIS data?",
      Options: ["Raster", "Vector", "Temporal", "None of the above"],
      answer: "None of the above"
    },
    {
      numb: 29,
      question: "What is the principle of 'triangulation' in surveying?",
      Options: [
        "Calculating distance by measuring angles from known points",
        "Determining altitude by comparing data from different levels",
        "Mapping an area using satellite imagery",
        "Using elevation data to construct 3D maps"
      ],
      answer: "Calculating distance by measuring angles from known points"
    },
    {
      numb: 30,
      question: "What is the primary use of 'satellite imagery' in geoinformatics?",
      Options: [
        "To predict weather patterns",
        "To collect large-scale spatial data for mapping and analysis",
        "To measure soil composition",
        "To provide real-time positioning"
      ],
      answer: "To collect large-scale spatial data for mapping and analysis"
    },
    {
      numb: 31,
      question: "What is the significance of 'geodetic control' in surveying?",
      Options: [
        "It ensures the accuracy of mapping measurements based on Earth's shape.",
        "It records all digital map data",
        "It records weather conditions during the survey",
        "It is a method for converting distances into area measurements"
      ],
      answer: "It ensures the accuracy of mapping measurements based on Earth's shape."
    },
    {
      numb: 32,
      question: "In which coordinate system is the Earth's surface represented by latitudes and longitudes?",
      Options: [
        "Cartesian",
        "Geographic",
        "UTM",
        "Spherical"
      ],
      answer: "Geographic"
    },
    {
      numb: 33,
      question: "What is 'planimetric mapping'?",
      Options: [
        "Mapping that involves only elevation information",
        "Mapping that represents the Earth's three-dimensional surface",
        "A 2D representation of horizontal positions without elevation",
        "A system for calculating distances using triangulation"
      ],
      answer: "A 2D representation of horizontal positions without elevation"
    },
    {
      numb: 34,
      question: "What is the purpose of 'geospatial data visualization'?",
      Options: [
        "To create images for marketing purposes",
        "To represent complex geographic data in visual forms for analysis",
        "To determine the physical properties of land",
        "To predict weather changes"
      ],
      answer: "To represent complex geographic data in visual forms for analysis"
    },
    {
      numb: 35,
      question: "What kind of data does 'LiDAR' collect?",
      Options: [
        "Only color images",
        "3D point clouds representing terrain features",
        "Video footage of the Earth's surface",
        "Meteorological data"
      ],
      answer: "3D point clouds representing terrain features"
    },
    {
      numb: 36,
      question: "Which of the following surveying methods uses electromagnetic signals to measure distance?",
      Options: [
        "Tachymetry",
        "Total Station",
        "Stereophotogrammetry",
        "GPS"
      ],
      answer: "Total Station"
    },
    {
      numb: 37,
      question: "What does 'geospatial analysis' involve?",
      Options: [
        "Generating random geographic data",
        "Analyzing spatial patterns and relationships in geospatial data",
        "Mapping the physical features of space",
        "Estimating the population of geographic regions"
      ],
      answer: "Analyzing spatial patterns and relationships in geospatial data"
    },
    {
      numb: 38,
      question: "What is 'spatial interpolation' in GIS?",
      Options: [
        "The process of converting vector data into raster format",
        "The method of predicting unknown values from known data points",
        "A technique for visualizing data in 3D space",
        "The process of removing noise from geographic datasets"
      ],
      answer: "The method of predicting unknown values from known data points"
    },
    {
      numb: 39,
      question: "Which technology is used for accurate measurement of the Earth's surface using satellites?",
      Options: [
        "Photogrammetry",
        "GNSS (Global Navigation Satellite System)",
        "Theodolite",
        "Ground Penetrating Radar"
      ],
      answer: "GNSS (Global Navigation Satellite System)"
    },
    {
      numb: 40,
      question: "Which method is commonly used to map the topography of a region?",
      Options: [
        "Aerophotogrammetry",
        "Differential leveling",
        "Lithography",
        "LIDAR"
      ],
      answer: "Differential leveling"
    },
    {
      numb: 41,
      question: "What is the most common use of 'spatial data'?",
      Options: [
        "Predicting weather",
        "Navigating roads and paths",
        "Analyzing and modeling geographical features",
        "Measuring physical material properties"
      ],
      answer: "Analyzing and modeling geographical features"
    },
    {
      numb: 42,
      question: "Which of the following is a primary feature of a 'Geodetic Survey'?",
      Options: [
        "Measuring the physical properties of objects",
        "Measuring large distances and angles with a focus on accuracy",
        "Mapping roads and infrastructure",
        "Gathering images from drones"
      ],
      answer: "Measuring large distances and angles with a focus on accuracy"
    },
    {
      numb: 43,
      question: "What does the term 'Geospatial Intelligence' refer to?",
      Options: [
        "The application of mapping for military purposes",
        "The collection and analysis of geographic data for decision-making",
        "Analyzing population density data",
        "Predicting economic trends"
      ],
      answer: "The collection and analysis of geographic data for decision-making"
    },
    {
      numb: 44,
      question: "What is a 'datum transformation' in GIS?",
      Options: [
        "A technique used to convert a digital elevation model into raster format",
        "A method for converting data into geographic coordinates based on different datums",
        "A technique used for adjusting map projections",
        "The process of collecting GPS coordinates"
      ],
      answer: "A method for converting data into geographic coordinates based on different datums"
    },
    {
      numb: 45,
      question: "What type of data does 'spatial analysis' in GIS deal with?",
      Options: [
        "Weather data",
        "Temporal data",
        "Data that is tied to specific locations on Earth",
        "Sound wave data"
      ],
      answer: "Data that is tied to specific locations on Earth"
    },
    {
      numb: 46,
      question: "In GPS technology, what does 'RTK' stand for?",
      Options: [
        "Real-Time Kinematic",
        "Rapid Tracking Kinematics",
        "Range Tracking Kinematic",
        "Radio Transmitting Kinematics"
      ],
      answer: "Real-Time Kinematic"
    },
    {
      numb: 47,
      question: "What is 'remote sensing' used for in the context of surveying?",
      Options: [
        "Collecting data directly from the Earth's surface",
        "Measuring distances between points on Earth",
        "Gathering data from a distance without physical contact with the surface",
        "Measuring temperature across various locations"
      ],
      answer: "Gathering data from a distance without physical contact with the surface"
    },
    {
      numb: 48,
      question: "What is the standard unit of measurement in geodesy?",
      Options: [
        "Meter",
        "Kilometer",
        "Foot",
        "Mile"
      ],
      answer: "Meter"
    },
    {
      numb: 49,
      question: "What is the role of 'metadata' in geospatial data?",
      Options: [
        "Describing the quality, accuracy, and source of the data",
        "Providing the visual map representation of the data",
        "Encrypting data for secure access",
        "Compressing data for faster transmission"
      ],
      answer: "Describing the quality, accuracy, and source of the data"
    },
    {
      numb: 50,
      question: "Which tool is used for high-precision measurements of angles and distances in surveying?",
      Options: [
        "Compass",
        "Total Station",
        "Altimeter",
        "Radar"
      ],
      answer: "Total Station"
    }
  ]
