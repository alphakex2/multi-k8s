import React from "react"

import { Link } from "react-router-dom"

export interface OtherPageProps {}

const OtherPage: React.FC<OtherPageProps> = () => {
  return (
    <div>
      Other Page
      <Link to="/"> Go Back Home</Link>
    </div>
  )
}

export default OtherPage
