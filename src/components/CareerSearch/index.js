import React, { useEffect, useState } from "react";
import {
  CarrerSearchContainer,
  CarrerMainSearchContainer,
  SearchBar,
  SearchBarContainer,
  SearchIcon,
  Search,
  Button,
  JobListingContainer,
  JobListContainer,
  JobFound,
  Line,
  JobsCardContainer,
  JobsName,
  JobsCardDetails,
  LocationContainer,
  PostedContainer,
  Location,
  Clock,
  LocationText,
  JobsFlex,
} from "./style";
import JobDescription from "../JobDescription";
import searchIcon from "../../assets/SearchIcon.svg";
import Papa from "papaparse";
import CarrerData from "../../assets/carrerCsv/careers.csv";
import LocationIcon from "../../assets/location.svg";
import ClockIcon from "../../assets/Clock.svg";
import {Jobs} from '../../assets/carrerCsv/carrer';
import { locationMap } from "../../assets/carrerCsv/carrer";

const JobsCard = ({ data, setSelectedJob, index, selectedJob}) => {
  return (
    <>
      <JobsCardContainer onClick={() => setSelectedJob(index)}>
        <JobsName style={{color: selectedJob === index ? 'red': ''}}>{data.position}</JobsName>
        <JobsCardDetails>
          <LocationContainer>
            <Location src={LocationIcon} />
            <LocationText>{locationMap[data.Location]}</LocationText>
          </LocationContainer>
          <LocationContainer>
            <Location src={ClockIcon} />
            <LocationText>2 days ago</LocationText>
          </LocationContainer>
          <PostedContainer></PostedContainer>
        </JobsCardDetails>
      </JobsCardContainer>
      <Line />
    </>
  );
};

const CarrerSearch = () => {
  const [searchText, setSearchText] = useState("");

  //This state will store the parse Data
  const [data, setData] = useState(Jobs.Jobs);

  //
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <CarrerMainSearchContainer>
      <CarrerSearchContainer>
        <SearchBarContainer>
          <SearchBar>
            <SearchIcon src={searchIcon} />
            <Search
              placeholder="Search Jobs that you are looking for "
              value={searchText}
            />
          </SearchBar>
          <Button>Search</Button>
        </SearchBarContainer>
        <JobsFlex>
          <JobListingContainer>
            <JobListContainer>
              <JobFound>{`${data.length - 1} JOBS FOUND`}</JobFound>
              <Line />
            </JobListContainer>
            {console.log("ravi", data)}
            {data.map((data, index) => {
                return <JobsCard data={data} key={index} setSelectedJob={setSelectedJob} selectedJob={selectedJob} index={index}/>;
            })}
          </JobListingContainer>
          <JobDescription data={data} selectedJob={selectedJob}/>
        </JobsFlex>
      </CarrerSearchContainer>
    </CarrerMainSearchContainer>
  );
};

export default CarrerSearch;
