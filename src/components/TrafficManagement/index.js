import React from "react";
import {
  TrafficManagementContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  ImpactContentContainer,
  ContentContainer,
  ContentContainer2,
  GraphContentContainer,
  TextContentContainer,
  Image,
  TextContentHeading,
  TextContentSubHeading,
  BulletPoint,
  BulletPointContainer,
  BulletPointText,
  BackGroundCircle,
  GraphText,
  GraphAnalysis,
  GraphAnalysis1,
  PercentageText,
  DownArrow,
  AnalysisText,
  BackGroundCircle1
} from "./style";

import Graph1 from '../../assets/Graph1.png';
import AIDashboard from '../../assets/AIDashboard.png';
import ChallanApp from '../../assets/ChallanApp.png';

const TrafficManagement = () => {
  return (
    <TrafficManagementContainer>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>AI Driven Integrated Traffic Management</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <ImpactContentContainer>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Graph1} />
              <GraphText>
                "This data is from the pilot which was conducted in Central
                Business District - Bangalore, under the supervision of
                Bangalore Traffic Police Department."
              </GraphText>
              <GraphAnalysis>
                <PercentageText>42% </PercentageText>
                <DownArrow>&darr; </DownArrow>
                <AnalysisText>
                  Reduction in total wait-time at signals
                </AnalysisText>
              </GraphAnalysis>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Traffic Management System</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Optimizes traffic flow by reducing congestion
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Coordination of traffic signals across the city using AI
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Automatic green-corridor for emergency/VIP vehicles
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI is always auto learning and improving{" "}
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Can be integrated with existing traffic lights
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
          <ContentContainer2>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Graph1} />
              <GraphText>
                "This data is from the pilot which was conducted in Central
                Business District - Bangalore, under the supervision of
                Bangalore Traffic Police Department."
              </GraphText>
              <GraphAnalysis1>
                <PercentageText>95% + </PercentageText>
                <AnalysisText>
                  Accuracy
                </AnalysisText>
              </GraphAnalysis1>
              <GraphAnalysis>
                <PercentageText>1000+</PercentageText>
                <AnalysisText>
                Violations detected per day per junction 
                </AnalysisText>
              </GraphAnalysis>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Traffic Violation System</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Automatically detects traffic violations
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Violation proof and payment link send automatically sent to
                    violator's mobile
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI Driven Challan Collection App for authorities to ease
                    challan collection
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Reduces traffic violations over time
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>Night vision enabled</BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer2>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Graph1} />
              <GraphAnalysis>
                <PercentageText>200tons </PercentageText>
                <DownArrow>&darr; </DownArrow>
                <AnalysisText>
                Reduction in toxic emission per day
                </AnalysisText>
              </GraphAnalysis>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>
                Reduction in Toxic Emissions
              </TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Reduction in idle time at junctions
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    200 tons of toxic emissions reduced per city per day
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Reduction in fuel expenses for commuters
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
          <ContentContainer2>
            <GraphContentContainer>
              <BackGroundCircle1 />
              <Image src={AIDashboard} />
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>AI Ways Online Dashboard</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Control traffic signals remotely
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    View of all traffic violations
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Traffic and violation analytics
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Customisable user authentication
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer2>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={ChallanApp} />
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>AI Driven Challan Collection</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Live location of vehicles with unpaid traffic violations near the authprities
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI driven propmts to collect unpaid challans
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Collect unpaid challans in a smart and effective way
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
        </ImpactContentContainer>
    </TrafficManagementContainer>
  );
};

export default TrafficManagement;
