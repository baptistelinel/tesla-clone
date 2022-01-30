import Section from './components/Section';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
      />
    </>
  );
};

export default Home;
