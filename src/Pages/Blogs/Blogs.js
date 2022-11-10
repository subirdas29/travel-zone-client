import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className=" p-20  bg-base-200">
 
    <div>
      <h1 className="text-4xl font-bold">01.Difference between sql and nosql?</h1>
      <p className="py-6">The five critical differences between SQL vs NoSQL are: <br/>

01.SQL databases are relational, NoSQL databases are non-relational.<br/>
02.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br/>
03.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br/>
04.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br/>
05.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p><br/>
      
    </div>
    <div>
      <h1 className="text-4xl font-bold">02.What is JWT, and how does it work?</h1>
      <p className="py-6">Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity.<br/>
      <p className='font-bold'>Work of JWT are:</p> 
      JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
      
    </div>
    <div>
      <h1 className="text-4xl font-bold">03.What is the difference between javascript and NodeJS?</h1>
      <p className="py-6">1. NodeJS : 
NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br/>

2. JavaScript : <br/>
Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p><br/>
      
    </div>
    <div>
      <h1 className="text-4xl font-bold">04.How does NodeJS handle multiple requests at the same time?</h1>
      <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p><br/>
      
    </div>
  </div>



    );
};

export default Blogs;