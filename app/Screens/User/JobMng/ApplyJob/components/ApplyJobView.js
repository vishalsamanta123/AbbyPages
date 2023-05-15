import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import inputStyle from "../../../../../Components/MainInput/styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import MainPoll from "../../../../../Components/MainPoll";
import SelectButton from "../../../../../Components/SelectButton";
import MainButton from "../../../../../Components/MainButton";
import { OpenDoc } from "../../../../../Utils/Globalfunctions";
import MediaPicker from "../../../../../Components/MediaPicker";
import PageScroll from "../../../../../Components/PageScroll";

const ApplyJobView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Apply Job"} loginButton={false} />
      <PageScroll style={CommonStyles.scrollCon}>
        <View style={styles.containerStyl}>
          <ScaleText style={styles.CommntyAmbsdorTxt}>
            {props.itemData?.job_title}
          </ScaleText>
          <ScaleText style={styles.ColumbiaText}>
            {props.itemData?.address} /{" "}
            {props?.itemData?.job_type === "1"
              ? "Fixed Term Freelance"
              : props?.itemData?.job_type === "2"
              ? "Paid Freelance"
              : props?.itemData?.job_type === "3"
              ? "Unpaid Full Time"
              : props?.itemData?.job_type === "4"
              ? "Paid Internship"
              : props?.itemData?.job_type === "5"
              ? "Part Time Temporary"
              : props?.itemData?.job_type === "6"
              ? "Unpaid Internship"
              : "Not Found"}
          </ScaleText>
        </View>
        <View style={styles.containerStyl}>
          <ScaleText style={styles.headTxt}>Submit your application</ScaleText>
          <View style={[inputStyle.mainCont, styles.inputCon]}>
            <ScaleText
              onPress={() =>
                props.setDocUpload({
                  type: "resume",
                  open: true,
                })
              }
              numberOfLines={1}
              style={inputStyle.inputCon}
            >
              {props?.applyJob?.resume?.name
                ? props?.applyJob?.resume?.name
                : props?.applyJob?.resume === "" ||
                  props?.applyJob?.resume === null
                ? "Résumé/CV"
                : props?.applyJob?.resume?.substring(
                    props?.applyJob?.resume?.lastIndexOf("/") + 1
                  )}
            </ScaleText>
            <TouchableOpacity
              onPress={() => {
                if (
                  props?.applyJob?.open_resume != "" ||
                  props?.applyJob?.open_resume != null
                ) {
                  OpenDoc(
                    props?.applyJob?.open_resume?.uri
                      ? props?.applyJob?.open_resume?.uri
                      : props?.applyJob?.open_resume
                  );
                }
              }}
              style={styles.rightImgVw}
            >
              <IconX
                origin={ICON_TYPE.ICONICONS}
                size={22}
                name={
                  props?.applyJob?.resume === "" ||
                  props?.applyJob?.resume === null
                    ? "cloud-upload-outline"
                    : "cloud-download-outline"
                }
                color={COLORS.RGBA}
              />
              {props?.applyJob?.resume === "" ||
              props?.applyJob?.resume === null ? null : (
                <ScaleText style={{ fontSize: FONT_SIZE.light }}>
                  View
                </ScaleText>
              )}
            </TouchableOpacity>
          </View>
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                fullName: val,
              })
            }
            value={props.applyJob?.fullName}
            placeholder="Full Name"
            rightImgName={"user"}
            rightImgOrigin={ICON_TYPE.EVIL_ICONS}
            rightImgSize={29}
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                email: val,
              })
            }
            value={props?.applyJob.email}
            placeholder="Email"
            rightImgName={"email"}
            rightImgOrigin={ICON_TYPE.Fontisto}
            rightImgSize={19}
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                phone: val,
              })
            }
            value={props.applyJob.phone}
            placeholder="Phone"
            keyboardType={"number-pad"}
            maxLength={10}
            rightImgName={"phone"}
            rightImgOrigin={ICON_TYPE.FEATHER_ICONS}
            rightImgSize={19}
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                current_Company: val,
              })
            }
            value={props.applyJob.current_Company}
            placeholder="Current Company"
            rightImgName={"work-outline"}
            rightImgOrigin={ICON_TYPE.MATERIAL_ICONS}
            rightImgSize={19}
          />
        </View>
        <View style={styles.containerStyl}>
          <ScaleText style={styles.headTxt}>Links</ScaleText>
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                abby_profile_url: val,
              })
            }
            value={props.applyJob.abby_profile_url}
            placeholder="AbbyPages Profile URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                linkedinUrl: val,
              })
            }
            value={props.applyJob.linkedinUrl}
            placeholder="LinkedIn URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                twitterUrl: val,
              })
            }
            value={props.applyJob.twitterUrl}
            placeholder="Twitter URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                githubUrl: val,
              })
            }
            value={props.applyJob.githubUrl}
            placeholder="Github URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                portfolioUrl: val,
              })
            }
            value={props.applyJob.portfolioUrl}
            placeholder="Portfolio URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                other_website: val,
              })
            }
            value={props.applyJob.other_website}
            placeholder="Other Website"
          />
        </View>
        <View style={[styles.containerStyl, { marginTop: 10 }]}>
          <ScaleText style={styles.headTxt}>Cover Letter</ScaleText>
          <ScaleText style={styles.subTxt}>
            Please include a cover letter outling your interest in AbbyPages and
            why you're our ideal candidate *
          </ScaleText>
          <View style={[inputStyle.mainCont, styles.inputCon]}>
            <ScaleText
              onPress={() =>
                props.setDocUpload({
                  type: "letter",
                  open: true,
                })
              }
              numberOfLines={1}
              style={inputStyle.inputCon}
            >
              {props?.applyJob?.cover_letter?.name
                ? props?.applyJob?.cover_letter?.name
                : props?.applyJob?.cover_letter === "" ||
                  props?.applyJob?.cover_letter === null
                ? "Upload File"
                : props?.applyJob?.cover_letter?.substring(
                    props?.applyJob?.cover_letter?.lastIndexOf("/") + 1
                  )}
            </ScaleText>
            <TouchableOpacity
              onPress={() => {
                if (
                  props?.applyJob?.open_cover_letter !== "" ||
                  props?.applyJob?.open_cover_letter !== null
                ) {
                  OpenDoc(
                    props?.applyJob?.open_cover_letter?.fileCopyUri
                      ? props?.applyJob?.open_cover_letter?.fileCopyUri
                      : props?.applyJob?.open_cover_letter
                  );
                }
              }}
              style={styles.rightImgVw}
            >
              <IconX
                origin={ICON_TYPE.ICONICONS}
                size={22}
                name={
                  props?.applyJob?.cover_letter ||
                  props?.applyJob?.cover_letter === "" ||
                  props?.applyJob?.cover_letter === null
                    ? "cloud-upload-outline"
                    : "cloud-download-outline"
                }
                color={COLORS.RGBA}
              />
              {props?.applyJob?.cover_letter === "" ||
              props?.applyJob?.cover_letter === null ? null : (
                <ScaleText style={{ fontSize: FONT_SIZE.light }}>
                  View
                </ScaleText>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.containerStyl, { marginTop: 10 }]}>
          <ScaleText style={styles.headTxt}>Us Work Status</ScaleText>
          <ScaleText style={styles.subTxt}>
            Are you legally authorized to work in the U.S *
          </ScaleText>
          <MainPoll
            onPressButton={(type) => {
              props.setApplyJob({
                ...props.applyJob,
                workStatus: type,
              });
            }}
            value={props?.applyJob?.workStatus === 1 ? "check" : "uncheck"}
          />
          <ScaleText style={[styles.subTxt, { paddingTop: 15 }]}>
            Will you now or in the future require sponsership for employment
            visa status (e.g, H1-B visa status) *
          </ScaleText>
          <MainPoll
            onPressButton={(type) => {
              props.setApplyJob({
                ...props.applyJob,
                visaStatus: type,
              });
            }}
            value={props?.applyJob?.visaStatus === 1 ? "check" : "uncheck"}
          />
          <View style={{ marginTop: 20 }}>
            <MainInput
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  additional_Info: val,
                })
              }
              value={props.applyJob.additional_Info}
              placeholder="Additional Information"
            />
          </View>
        </View>
        <View style={[styles.containerStyl, { marginTop: 10 }]}>
          <ScaleText style={styles.headTxt}>
            U.S equal employment opportunity information
          </ScaleText>
          <ScaleText style={styles.subTxt}>
            (Completion isvoluntary a. wilt not subject you to adverse
            treatment)
          </ScaleText>
          <View style={{ paddingTop: 15 }}>
            <ScaleText style={styles.subTxt}>
              Our company values diversity. To ensure that we comply with
              reporting requirements a. to learn more about how we can increase
              diversity In our candidate pool, we invite you to voluntarily
              provide demographic information Ina confidential survey at the end
              if this appLicanon. Providing this information isoptional. It will
              not be accessible or used in the hiring process,and has no effect
              on your opportunity for employment.
            </ScaleText>
          </View>
          <View style={{ marginTop: 16 }}>
            <SelectButton
              listType={""}
              data={[
                { label: "Male", value: 1 },
                { label: "Female", value: 2 },
              ]}
              headTxt={"Gender"}
              value={
                props.applyJob.gender === "1"
                  ? "Male"
                  : props.applyJob.gender === "2"
                  ? "Female"
                  : ""
              }
              labelField={"label"}
              valueField={"label"}
              onPressItem={(item) => {
                props.setApplyJob({
                  ...props.applyJob,
                  gender: item?.value,
                });
              }}
              searchInput={false}
            />
          </View>
          <SelectButton
            listType={""}
            data={[
              { label: "American Indian", value: "1" },
              { label: "Indian", value: "2" },
              { label: "African American", value: "3" },
              { label: "Latino", value: "4" },
            ]}
            headTxt={"Race"}
            value={
              props.applyJob.race === "1"
                ? "American Indian"
                : props.applyJob.race === "2"
                ? "Indian"
                : props.applyJob.race === "3"
                ? "African American"
                : props.applyJob.race === "4"
                ? "Latino"
                : ""
            }
            labelField={"label"}
            valueField={"label"}
            onPressItem={(item) => {
              props.setApplyJob({
                ...props.applyJob,
                race: item?.value,
              });
            }}
            searchInput={false}
          />
          <SelectButton
            listType={""}
            data={[
              { label: "Yes", value: "1" },
              { label: "No", value: "2" },
            ]}
            headTxt={"Veteran Status"}
            value={
              props.applyJob.veteran_status === "1"
                ? "Yes"
                : props.applyJob.veteran_status === "2"
                ? "No"
                : ""
            }
            labelField={"label"}
            valueField={"label"}
            onPressItem={(item) => {
              props.setApplyJob({
                ...props.applyJob,
                veteran_status: item?.value,
              });
            }}
            searchInput={false}
          />
        </View>
        <View style={{ marginHorizontal: 18, marginVertical: 10 }}>
          <MainButton
            buttonTxt="Submit Application"
            paddingHeight={12}
            onPressButton={() => props.onSubmit()}
          />
        </View>
      </PageScroll>
      <MediaPicker
        Visible={props?.docUpload?.open}
        setVisible={() =>
          props.setDocUpload({
            type: "",
            open: false,
          })
        }
        docType={"doc"}
        imageData={(data) => {
          if (props?.docUpload?.type === "resume") {
            props.setApplyJob({
              ...props.applyJob,
              resume: data,
              open_resume: data,
            });
          } else if (props?.docUpload?.type === "letter") {
            props.setApplyJob({
              ...props.applyJob,
              cover_letter: data,
              open_cover_letter: data,
            });
          }
        }}
      />
    </View>
  );
};
export default ApplyJobView;
