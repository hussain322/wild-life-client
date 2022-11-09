import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-20 w-[80%] mx-auto min-h-[100vh]">
      {/* Question no 1 */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-2xl font-medium">
          Difference between SQL and NoSQL!
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
          <p className="font-bold">The Main Differences: </p>
          <br />
          <p>
            <strong>Type – </strong>
            SQL databases are primarily called as Relational Databases (RDBMS);
            whereas NoSQL database are primarily called as non-relational or
            distributed database.
          </p>
          <br />
          <p>
            <strong>Language – </strong>
            SQL databases defines and manipulates data based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice especially for great complex
            queries. But from other side it can be restrictive. SQL requires you
            to use predefined schemas to determine the structure of your data
            before you work with it. Also all of your data must follow the same
            structure. This can require significant up-front preparation which
            means that a change in the structure would be both difficult and
            disruptive to your whole system. A NoSQL database has dynamic schema
            for unstructured data. Data is stored in many ways which means it
            can be document-oriented, column-oriented, graph-based or organized
            as a KeyValue store. This flexibility means that documents can be
            created without having defined structure first. Also each document
            can have its own unique structure. The syntax varies from database
            to database, and you can add fields as you go.
          </p>
          <br />
          <p>
            <strong>Scalability –</strong>
            In almost all situations SQL databases are vertically scalable. This
            means that you can increase the load on a single server by
            increasing things like RAM, CPU or SSD. But on the other hand NoSQL
            databases are horizontally scalable. This means that you handle more
            traffic by sharding, or adding more servers in your NoSQL database.
            It is similar to adding more floors to the same building versus
            adding more buildings to the neighborhood. Thus NoSQL can ultimately
            become larger and more powerful, making these databases the
            preferred choice for large or ever-changing data sets.
          </p>
          <br />
          <p>
            <strong> Structure –</strong>
            SQL databases are table-based on the other hand NoSQL databases are
            either key-value pairs, document-based, graph databases or
            wide-column stores. This makes relational SQL databases a better
            option for applications that require multi-row transactions such as
            an accounting system or for legacy systems that were built for a
            relational structure.
          </p>
          <br />
          <p>
            <strong> Property followed –</strong>
            SQL databases follow ACID properties (Atomicity, Consistency,
            Isolation and Durability) whereas the NoSQL database follows the
            Brewers CAP theorem (Consistency, Availability and Partition
            tolerance).
          </p>
          <br />
          <p>
            <strong>Support –</strong>
            Great support is available for all SQL database from their vendors.
            Also a lot of independent consultations are there who can help you
            with SQL database for a very large scale deployments but for some
            NoSQL database you still have to rely on community support and only
            limited outside experts are available for setting up and deploying
            your large scale NoSQL deployments.
          </p>
        </div>
      </div>
      <br />
      {/* Question no 2 */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-2xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            <strong>JWT: </strong>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </p>
          <br />
          <p>
            <strong>How JWT Works: </strong> JWTs differ from other web tokens
            in that they contain a set of claims. Claims are used to transmit
            information between two parties. What these claims are depends on
            the use case at hand. For example, a claim may assert who issued the
            token, how long it is valid for, or what permissions the client has
            been granted. A JWT is a string made up of three parts, separated by
            dots (.), and serialized using base64. In the most common
            serialization format, compact serialization, the JWT looks something
            like this: xxxxx.yyyyy.zzzzz.
          </p>
        </div>
      </div>
      <br />
      {/* Question no 3 */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-2xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <br />
      {/* Question no 4 */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-2xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
