import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import React from 'react';
import JobApplication from '../forms/Application';
import { useQuery, gql } from '@apollo/client';

const JOBS_QUERY = gql `
query {
    jobs {
        id
        name
        company
        description
        category
        salary
    }
}
`



function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('Viewing post details!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'green' }}
      onClick={decoratedOnClick}
      className='applybtn'
    >
      {children}
    </button>
  );
}

function JobPostings() {
  const { loading, error, data } = useQuery(JOBS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Accordion className='postContainer' defaultActiveKey="0">
      {data.jobs.map((job) => (
        <div key={job.id} className='singlePost'>
          <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
                Salary: ${job.salary}
                <p>{job.description}</p>

                
              </Card.Text>

              <Card.Header className='detailsExpandButton'>
                <CustomToggle eventKey={job.id}>Apply</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={job.id}>
                <Card.Body>
                  <JobApplication jobId={job.id} />
                </Card.Body>
              </Accordion.Collapse>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Accordion>
  );
}


// function JobPostings() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Card>
//         <div className='singlePost'>
//             <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
//               <Card.Body>
//               <Card.Title>JOB NAME</Card.Title>
//                 <Card.Text>
//                   Salary: $xxxxxx
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>

//                 <Card.Header className='detailsExpandButton'>
//                   <CustomToggle eventKey="1" className='applybtn' >Apply</CustomToggle>
//                   </Card.Header>
//                   <Accordion.Collapse eventKey="1">
//                     <Card.Body>
//                         <JobApplication/>
//                     </Card.Body>
//                   </Accordion.Collapse>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className='singlePost'>
//             <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
//               <Card.Body>
//               <Card.Title>JOB NAME</Card.Title>
//                 <Card.Text>
//                   Salary: $xxxxxx
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>

//                 <Card.Header className='detailsExpandButton'>
//                   <CustomToggle eventKey="2" >Apply</CustomToggle>
//                   </Card.Header>
//                   <Accordion.Collapse eventKey="2">
//                     <Card.Body>
//                       <JobApplication/>
//                     </Card.Body>
//                   </Accordion.Collapse>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className='singlePost'>
//             <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
//               <Card.Body>
//               <Card.Title>JOB NAME</Card.Title>
//                 <Card.Text>
//                   Salary: $xxxxxx
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>

//                 <Card.Header className='detailsExpandButton'>
//                   <CustomToggle eventKey="3">Apply</CustomToggle>
//                   </Card.Header>
//                   <Accordion.Collapse eventKey="3">
//                     <Card.Body>
//                       <JobApplication/>
//                     </Card.Body>
//                   </Accordion.Collapse>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className='singlePost'>
//             <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
//               <Card.Body>
//               <Card.Title>JOB NAME</Card.Title>
//                 <Card.Text>
//                   Salary: $xxxxxx
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>

//                 <Card.Header className='detailsExpandButton'>
//                   <CustomToggle eventKey="4">Apply</CustomToggle>
//                   </Card.Header>
//                   <Accordion.Collapse eventKey="4">
//                     <Card.Body>
//                       <JobApplication/>
//                     </Card.Body>
//                   </Accordion.Collapse>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className='singlePost'>
//             <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
//               <Card.Body>
//               <Card.Title>JOB NAME</Card.Title>
//                 <Card.Text>
//                   Salary: $xxxxxx
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>

//                 <Card.Header className='detailsExpandButton'>
//                   <CustomToggle eventKey="5">Apply</CustomToggle>
//                   </Card.Header>
//                   <Accordion.Collapse eventKey="5">
//                     <Card.Body>
//                       <JobApplication/>
//                     </Card.Body>
//                   </Accordion.Collapse>
//               </Card.Body>
//             </Card>
//           </div>
//       </Card>  
//     </Accordion>
//   );
// }

export default JobPostings;