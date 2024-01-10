import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useItem from "./useItem";
import ItemTab from "./ItemTab";
import Reviews from "./Review/Reviews";

const itemsPerPage = 30;

const Portfolio = () => {
  const [item] = useItem();
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPage, setReviewsPage] = useState(1); // New state for reviews pagination

  const programming = item.filter((item) => item.niche === "Programming");
  const voice = item.filter((item) => item.niche === "Voice");
  const graphics = item.filter((item) => item.niche === "Graphics");

  const allItems = item; // All items

  const getPageItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const allItemsInSequence = [];

  // Iterate through items in sequence, filling in missing niches
  for (
    let i = 0;
    i < Math.max(programming.length, voice.length, graphics.length);
    i++
  ) {
    if (programming[i]) allItemsInSequence.push(programming[i]);
    if (voice[i]) allItemsInSequence.push(voice[i]);
    if (graphics[i]) allItemsInSequence.push(graphics[i]);
  }

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleReviewsPageChange = (selectedPage) => {
    setReviewsPage(selectedPage);
  };

  return (
    <div className="pt-4" data-aos="fade-up">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Programming</Tab>
          <Tab>Voice</Tab>
          <Tab>Graphics</Tab>
          <Tab>All Reviews</Tab>
        </TabList>

        <TabPanel>
          <ItemTab items={getPageItems(allItemsInSequence)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(allItemsInSequence.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(programming)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(programming.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(voice)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(voice.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(graphics)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(graphics.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <Reviews currentPage={currentPage} onPageChange={handlePageChange} />
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
