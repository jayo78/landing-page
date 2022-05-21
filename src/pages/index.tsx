import Hero from "../components/Hero";
import Layout from "../components/Layout";
import HowItWorks from "../components/HowItWorks";

const Index = () => {
    return (
        <Layout>
            <Hero
                title="Optimize Your Internship Applications"
                subtitle="Hate endlessly applying to internships? We'll do it for you and optimize your chances"
                image="heroImage.jpg"
                ctaText="Get Started"
                ctaLink="https://mvvx7n3l5y5.typeform.com/to/YSSf3A3S"
            />
            <HowItWorks />
        </Layout>
    );
};

export default Index;
