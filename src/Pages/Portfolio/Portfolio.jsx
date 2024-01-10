import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useItem from "./useItem";
import ItemTab from "./ItemTab";
import Reviews from "./Review/Reviews";
import { BiSearchAlt } from "react-icons/bi";

const itemsPerPage = 30;

const Portfolio = () => {
  const [item] = useItem();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const programming = item.filter((item) => item.niche === "Programming");
  const voice = item.filter((item) => item.niche === "Voice");
  const graphics = item.filter((item) => item.niche === "Graphics");

  const getPageItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const allItemsInSequence = [];

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

  const handleSearchChange = (e) => {
    setCurrentPage(1);
    setSearchTerm(e.target.value);
  };

  const filteredProgramming = programming.filter((item) =>
    item.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredVoice = voice.filter((item) =>
    item.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredGraphics = graphics.filter((item) =>
    item.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredAllItemsInSequence = allItemsInSequence.filter((item) =>
    item.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-4" data-aos="fade-up">
      <Tabs>
        <TabList>
          <div className="flex items-center justify-between">
            <div>
              <Tab>All</Tab>
              <Tab>Programming</Tab>
              <Tab>Voice</Tab>
              <Tab>Graphics</Tab>
              <Tab>All Reviews</Tab>
            </div>
            <div>
              <li className="relative">
                <div className="text-end">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="text-xl">
                      <BiSearchAlt />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 rounded-box w-52"
                    >
                      <li>
                        <input
                          type="text"
                          placeholder="Search by project name"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          className="p-2 border-fuchsia-500 rounded shadow-lg glass"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </TabList>

        <TabPanel>
          <ItemTab items={getPageItems(filteredAllItemsInSequence)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              filteredAllItemsInSequence.length / itemsPerPage
            )}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(filteredProgramming)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProgramming.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(filteredVoice)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredVoice.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel>
          <ItemTab items={getPageItems(filteredGraphics)} />
          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredGraphics.length / itemsPerPage)}
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
