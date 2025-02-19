import Spinner from "@/components/Spinner";
import HeroSection from "@/components/HeroSection";
import Sale from "@/pages/dashboard/BestProducts";
import LatestProducts from "@/pages/dashboard/LatestProducts";
import Categories from "@/pages/dashboard/categories/Categories";
import LatestNews from "@/pages/dashboard/categories/LatestNews";
import DaastArtIntroduction from "@/components/DaastArtIntroduction";

const DashboardPage = () => {
    const dataSource = [
        {key: "1", name: "John Doe", salary: "$120,000"},
        {key: "2", name: "Jane Smith", salary: "$150,000"},
    ];

    const tableColumns = [
        {title: "Name", dataIndex: "name", key: "name"},
        {title: "Salary", dataIndex: "salary", key: "salary"},
    ];

    return (
        <>
            <Spinner/>
            <HeroSection/>
            <Sale/>
            <LatestProducts/>
            <Categories/>
            <LatestNews/>
            <DaastArtIntroduction/>

        </>
    );
};

export default DashboardPage;