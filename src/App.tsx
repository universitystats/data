import { List, Typography } from "@material-ui/core"
import SalaryAfterFiveYearsChart from "./Charts/SalaryAfterFiveYearsChart"
import StudentLoanRepaymentChart from "./Charts/StudentLoanRepayment"
import MedianEarningsAttainmentChart from "./Charts/MedianEarningsAttainmentChart"
import CustomListItem from "./Components/CustomListItem"
import StudentLoanProportionChart from "./Charts/StudentLoanProportionChart"
import TariffTable from "./Charts/TariffTable"
import { title } from "./copy"
import Introduction from "./Components/Introduction"
import { MainContainer } from "./styles"
import SubTitle from "./Components/SubTitle"
import TextBox from "./Components/TextBox"
import SubSubTitle from "./Components/SubSubTitle"
import MedianEarningsTimeChart from "./Charts/MedianEarningsTimeChart"
import HigherEducationMedianSalaryChart from "./Charts/HigherEducationMedianSalaryChart"
import GradNetIncomePremiumChart from "./Charts/GradNetIncomePremiumChart"

function Content() {
    return (
        <>
            <Typography variant='h2' style={{ marginTop: '24px' }} >{title}</Typography>
            <MainContainer>
                <Introduction />
                <SubTitle>Graduate Earnings</SubTitle>
                <TextBox>
                    The earnings that students obtain from going to university depend on several
                    factors: course, gender, prior attainment, “A” level subject choice, social class
                    and which university they go to. <br />

                    The following data are taken from: “DfE. Employment and Earnings Outcomes of Higher Education
                    Graduates: Experimental Data from the Longitudinal Education Outcomes (LEO) Dataset for
                    tax year 2019/19”, published 25 March 2021
                </TextBox>
                <SubSubTitle>Median Earnings by Subject five and ten years after graduation</SubSubTitle>
                <MedianEarningsTimeChart />
                <SubSubTitle>Median Earnings by prior attainment</SubSubTitle>
                <TextBox>The median earnings after 5 years depending on prior attainment at Key stage 5, is shown in diagram 2. This is based on the old tariff scoring system:</TextBox>
                <TariffTable />
                <SalaryAfterFiveYearsChart />
                <TextBox>Median earnings after five years, of graduates with a prior attainment of 4As or more, are about 80% higher than
                    those with a prior attainment of a BTEC.  </TextBox>
                <SubSubTitle>Median Earnings by prior attainment and subject</SubSubTitle>
                <TextBox>Data is shown in diagram 3 for three levels of prior attainment. Data for other levels of prior attainment are
                    available in the original tables. <br />
                    Notes:
                    <List>
                        <CustomListItem>
                            The variation in earnings differences in prior attainment are much smaller for degrees such as medicine, nursing and
                            education, where employment is mainly in the public sector and earnings are set by national wage rates, rather than
                            performance.
                        </CustomListItem>
                        <CustomListItem>
                            In highly competitive careers, such as economics, law and computing, the ratio of earnings for graduates entering with
                            “4 A grades or more” is more than double that of graduates entering via the BTEC route.
                        </CustomListItem>
                        <CustomListItem>
                            While the median earnings for nursing in diag 1 is 23rd out of 34 degree courses, diag 3 shows that for students coming
                            via the BTEC qualification, nursing is 7th out of 34
                        </CustomListItem>
                    </List>
                </TextBox>

                <MedianEarningsAttainmentChart />
                <SubSubTitle>Median Earnings by Higher Education Institution</SubSubTitle>
                <TextBox>The earnings after 5 yrs for different Higher Education Institutions (HEIs) (adjusted for subsequent working location)
                    is shown in diag. 4 and Table 1. <br /><br />
                    This shows a large variation in earnings depending on university. Imperial College provides the highest earnings due to
                    specialising in Scientific, technology, engineering and maths (STEM subjects) and medicine degrees. It is followed by the
                    London School of Economics and St Georges Medical School. The median earnings of Oxford and Cambridge are lower, because
                    they teach a wider range of subjects, some of which do not command such high earnings. Students from high-status
                    universities, such as the Russell Group and universities established before 1992, typically obtain higher-earnings.
                    The lowest earnings are provided by universities and colleges that provide degrees in creative arts and social care.
                </TextBox>
                <HigherEducationMedianSalaryChart />
                <TextBox>An IFS study in 2018 shows that most of the differences in earnings of students between universities can be
                    accounted for by the higher status universities typically teaching subjects, which provide higher earnings and also
                    taking the highest ability students with the most appropriate subject mix.
                </TextBox>
                {/* Placeholder for table */}
                <SubSubTitle>Graduate net income premium</SubSubTitle>
                <TextBox>An IFS report in 2020: “The impact of undergraduate degrees on lifetime earnings” has estimated the ranges of
                    lifetime earnings of graduates studying different subjects and also what these students would have earned without a degree
                    on the basis of their prior attainment. The premiums from obtaining a degree include earnings, taxes, national insurance
                    and student loan repayments, using a discount rate of 3% p.a. The median premium varies from minus £109k for creative arts
                    graduates to plus £750k for medicine graduates. The benefit to students from a degree is positive for about 82% of all
                    graduates. Diags. 5 and 6 show the percentage of students who obtain positive net lifetime earnings from taking a degree by
                    subject studied.
                </TextBox>
                <SubSubTitle>Percentage of students getting positive net lifetime returns by subject</SubSubTitle>
                <GradNetIncomePremiumChart />
                <TextBox>Although diagram 2 shows that female students tend to get lower median earnings than male students, the benefit of
                    taking a degree is greater for many female students than male students.</TextBox>
                <SubTitle>Student Loans</SubTitle>
                <TextBox>Work by IFS (2020) shows that the earnings ten years after graduation is a good indicator of lifetime earnings.
                    Therefore the earnings profile for 30 years after graduation using a typical relative graduate earnings profile with age.
                    Students are charged an interest rate on their student loan of up to 3% p.a. plus inflation and repay their loans at a rate
                    of 9% of earnings above £25000 (in 2017/8). Outstanding loans are written off 30 years after graduation. The amount of
                    student loan that students pay off will depend on their earnings. This is shown in diagram 7 assuming: debt after
                    graduation of £50000 and the government green book long term discount rate of 3% p.a.
                </TextBox>
                <SubSubTitle>Estimated Discounted Student Loan Repayment</SubSubTitle>

                <StudentLoanRepaymentChart />
                <TextBox>Graduates with high incomes at ten years after graduation – above £40000 (32% of students) will pay off their
                    student loans in full. Graduates with middling incomes will in effect pay a graduate tax, while graduates with low incomes
                    at ten years after graduation - less than £21600 (29% of students) will not repay any of their loans. Both these latter
                    groups will carry student debt until 30 years after graduation, when outstanding debt is written off. At a result only
                    40% - 50% of total higher education cost will be repaid by student loans, while the remainder (about £8.5 bn p.a.) will
                    need to be paid by taxpayers. <br /><br />
                    Based on the earnings distribution ten years after graduation and the data in diag. 7, the loan repayments for different
                    courses and universities can be estimated. The proportion of higher education cost paid by students on different courses
                    ranges are shown in diag. 8. They range between 76% for medicine and dentistry to 27% for creative arts and design. <br /><br />
                    As was stated above, 82% of students obtain positive net lifetime earnings from taking a degree. However, after taking
                    into account taxpayer payments towards student loans, the IFS 2020 report shows that only 70% of degrees give a net
                    positive overall return
                </TextBox>
                <StudentLoanProportionChart />
                <TextBox>The proportion of higher education cost paid by the taxpayer for graduates from different universities ranges
                    between 87% at Plymouth College of Art to 10% at Imperial College.
                </TextBox>
                <TextBox>
                    If you need any more information please e-mail info@educationstats.co.uk
                </TextBox>
            </MainContainer>

        </>
    )
}

export default Content