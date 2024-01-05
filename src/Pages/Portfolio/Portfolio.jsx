import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useItem from "./useItem";
import ItemTab from "./ItemTab";

const itemsPerPage = 30;

const Portfolio = () => {
  const [item] = useItem();
  const [currentPage, setCurrentPage] = useState(1);

  const programming = item.filter((item) => item.niche === "Programming");
  const voice = item.filter((item) => item.niche === "Voice");
  const graphics = item.filter((item) => item.niche === "Graphics");

  const getPageItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="pt-4">
      <Tabs>
        <TabList>
          <Tab>Programming</Tab>
          <Tab>Voice</Tab>
          <Tab>Graphics</Tab>
        </TabList>

        <TabPanel>
          <ItemTab items={getPageItems(programming)}></ItemTab>
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(programming.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(voice)}></ItemTab>
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(voice.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(graphics)}></ItemTab>
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(graphics.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 border border-fuchsia-500 rounded-full ${
            currentPage === page
              ? "bg-fuchsia-500 text-white"
              : "text-fuchsia-500 hover:bg-green-100"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};


export default Portfolio;
