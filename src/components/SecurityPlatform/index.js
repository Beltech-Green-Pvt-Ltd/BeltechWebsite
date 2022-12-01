import React from "react";
import {
  SecurityPlatformContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  SecurityContentContainer,
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
  BackGroundCircle1,
  GraphText,
  GraphAnalysis,
  GraphAnalysis1,
  PercentageText,
  DownArrow,
  AnalysisText
} from "./style";
import Fight from '../../assets/Fight.png';

const SecurityPlatform = () => {
  return (
    <SecurityPlatformContainer>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>AI Driven Integrated Traffic Management</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <SecurityContentContainer>
          <ContentContainer2>
            <GraphContentContainer>
              <Image src={Fight} />
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>
                Crime Detection
              </TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI automatically detects any suspicisous/violent activities
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Real-time alerts
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Detects: violene, theft, harassment, and a lot more
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer2>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle1 />
              <Image src={Fight} />
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Criminal Detection</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Detects people of interest and alerts authorities of their presence
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Detects people of interest and alerts authorities of their presence
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Highly customisable intelligence parameters
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
          <ContentContainer2>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Fight} />
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Women Safty</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI automatically detects any suspicisous/violent activities
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Real-time alerts
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Detects: violene, theft, harassment, and a lot more
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer2>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle1 />
              <Image src={Fight} />
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Intrusion Detection</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                  Registers users (temporary or permanent) allowed within premises
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                  Alerts authorities if any unauthorised person is detected
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Real-time tracking of unauthorised people
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
        </SecurityContentContainer>
    </SecurityPlatformContainer>
  );
};

export default SecurityPlatform;
