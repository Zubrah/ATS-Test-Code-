// // Search for Jobs
// app.get('/searchForJobs', async (req: Request, res: Response) => {
//   try {
//     const {
//       city,
//       company_name,
//       contact_email,
//       contact_name,
//       contact_number,
//       country,
//       full_address,
//       job_category,
//       job_skill,
//       job_status,
//       job_type,
//       locality,
//       name,
//       note_for_candidates,
//       exact_search,
//       job_slug,
//       sort_by,
//       sort_order,
//     } = req.query;

//     const queryParams = new URLSearchParams({
//       city : "",
//       company_name : "",
//       contact_email : "",
//       contact_name : "",
//       contact_number : "",
//       country : "",
//       full_address : "",
//       job_category : "",
//       job_skill : "",
//       job_status : "",
//       job_type : "",
//       locality : "",
//       name : "",
//       note_for_candidates : "",
//       exact_search : "true",
//       job_slug : "",
//       sort_by : "",
//       sort_order : "",
      
      
//     });

//     const customFields = [
//       {
//         field_id: 1, // Adjust the field_id as needed
//         filter_type: 'equals',
//         filter_value: 'software',
//       },
//       // Add more custom fields here if needed
//     ];

//     const options = {
//       method: 'GET',
//       url: `https://api.recruitcrm.io/v1/jobs/search?${queryParams.toString()}`,
//       headers: {
//         Accept: 'application/json',
//         Authorization: 'Bearer cy01Z8FTM002zJjbEUCVFfvS9nCOb8xuzCyoMH-7M2ctE69owxJ_QPhSSRk3FONxee7eAgx0vtqLkvsbQjRe0l8xNjY3MzA5NTc1'
//       },
//       data: {
//         custom_fields: customFields,
//       },
//     };

//     const response = await axios(options);
//     const jobDescriptionsSearch = response.data.data; // Extract relevant data

//     console.log('Job Descriptions:', jobDescriptionsSearch);

//     res.render('JobDescriptions', { jobDescriptionsSearch });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });