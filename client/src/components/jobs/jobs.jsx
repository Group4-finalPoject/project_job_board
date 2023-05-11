import React from 'react'
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

function Job({ job }) {
    return (
        <div>
            <h2>{job.name}</h2>
            <p>{job.company}-{job.salary}</p>
            <p>{job.desciption}</p>
        </div>
    );
}


export default Job