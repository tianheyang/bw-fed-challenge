import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>404</h1>
            <p>Oops, this route does not exist. <Link to="/">Return to homepage?</Link></p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage