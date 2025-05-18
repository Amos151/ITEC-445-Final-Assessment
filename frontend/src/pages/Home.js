const Home = () => {
  return (
    <div className="pgbody">
      <h1>Home</h1>
      <p>
        This is the home page for my final project assessment. I have several
        tasks to complete in order to collect all my marks, and I intend to get
        all my marks!!!
      </p>
      <p>To complete this assessment I must:</p>
      <ol>
        <li>
          Project setup - This involved a few steps:
          <ol className="alpha-list">
            <li>
              Download the start-up code provided in e-classroom and set up an
              associated github repository. Build a dev branch which you will
              work on during the assessment.
            </li>
            <li>
              Automate - Add github workflows as you did in your last activity
              that will enable your app to automatically deploy to the dev and
              production apps built for each of your final projects in heroku.
              Note at this time do not add tests to your code. Just get the
              framework connected
            </li>
            <li>
              Get a database - If you have not already connected your heroku
              account to your MongoDB Atlas account, do this now.
            </li>
            <br />
          </ol>
        </li>
        <li>
          Add a database - Currently the system is reading the blog data from a
          static array defined in the "routes.articles.js" file found on the
          server. This data must be saved in a MongoDb database and all the
          routes updated so that data is fetched from and updated to the
          database exclusively.
        </li>
        <li>
          Add authentication - Using OAuth and google, make it possible for
          users to authenticate with the application. Anyone with a gmail
          address should be able to authenticate via the verification email.
        </li>
        <li>
          New Post Feature - Modify your applicaiton so that a user who has been
          authenticated will have access to an additional option on their
          navigation menu to make a "New Post". Build out the feature using the
          NewPostPage,js file so that these users can add new posts to the
          database.
        </li>
        <li>
          Automation - add at least three (3) jest unit tests to your
          application. Ensure that your code does not deploy to your heroku site
          unless the tests pass.
        </li>
        <li>
          Make a demo - Finally, you must demo your completed application. Your
          demo should be around 5 minutes and go behind the scenes to show how
          you implemented the required features in your code as well as the
          functioning feature via the working app. PLease do not spend any time
          editing... If the video goes a little over then leave it as is.
        </li>
      </ol>
      <p>
        <strong>Note:</strong> The current file setup used a .env file in the
        server root directory. If you choose to use this you will need to edit
        the file with your database and port credentials
      </p>
    </div>
  );
};

export default Home;
