const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router');
const jobListingRoutes = require('./routes/api/jobListing');
const careerRoutes = require('./routes/api/careerRoutes');
const jobRoutes = require('./routes/api/jobRoute');
const adminRoutes = require('./routes/api/adminRoutes');
const quotationsRouter = require('./routes/api/appDevQuotationRoutes');
const fleetQuotationRoutes = require('./routes/api/fleetQuotation');
const WebQuotationRoute=require('./routes/api/quotation')
const ConsultingQuotationRoute=require('./routes/api/consultingQuotationRoutes')
const app = express();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Error connecting to MongoDB!', err));
// Middleware Section
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cors(corsOptions));
// Routes
app.use(router);
app.use('/api', careerRoutes);
app.use('/api', jobRoutes);
app.use('/api/jobListing', jobListingRoutes);
app.use('/api', adminRoutes);
app.use('/api', quotationsRouter);
app.use('/api', WebQuotationRoute);
app.use('/api/fleetQuotations', fleetQuotationRoutes);
app.use('/api/consulting', ConsultingQuotationRoute);
// Error handling middleware (global)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
// Start the server
const startApp = async () => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error(`Error while starting application: ${error}`);
  }
};
startApp();