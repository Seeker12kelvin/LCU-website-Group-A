import bg_image from "../images/bg.jpg";
import { Link } from "react-router-dom";
import Header from "../components/header";

const AdmissionsPage = () => {
  return (
    <section className="w-full h-full relative">
      <img
        src={bg_image}
        alt="A picture of the school ground"
        className="absolute -z-1 top-0 left-0 h-100 w-full object-cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-start gap-8 max-xl:pt-10 max-xl:gap-15 xl:p-20">
        <Header />

        <div className="xl:text-4xl font-bold bg-[#0f1725] text-white max-xl:text-2xl p-2 max-xl:ml-2">
          <h1>Admissions</h1>
        </div>

        <div className="h-full w-full bg-white max-sm:px-5 max-md:px-10 md:p-15 xl:pt-5 flex flex-col gap-15">
          <div className="flex gap-1.5 items-center text-[#666] text-xs border-b-[#6666664b] border-b pb-3">
            <Link
              to={"/"}
              className="hover:text-[#fa7252] transition-all duration-300"
            >
              Home
            </Link>
            <p>/</p>
            <p>Admissions</p>
          </div>

          <div className="flex flex-col gap-7">
            <h2 className="xl:text-3xl max-xl:text-xl font-bold">
              Undergraduate Admissions
            </h2>

            <p className="text-sm text-[#666]">
              Congratulations on taking the first step towards an excellent
              academic future. We are delighted that you have chosen to join our
              prestigious institution.
            </p>

            <p className="text-sm text-[#666]">
              Welcome to our online application portal!.
              <br />
              This streamlined online application process is designed to make
              your application experience as stress-free as possible.
            </p>

            <p className="text-sm text-[#666]">
              To help ensure a hitch-free application process, please have the
              following required documents scanned and saved on your device in
              JPEG format:
            </p>

            <h2 className="xl:text-3xl max-xl:text-xl font-bold">
              List of documents required
            </h2>

            <ol className="ml-3.5">
              <li type="1" className="text-sm text-[#666]">
                A decent passport photograph on white background
              </li>
              <li type="1" className="text-sm text-[#666]">
                Your birth certificate
              </li>
              <li type="1" className="text-sm text-[#666]">
                Your NIN slip
              </li>
              <li type="1" className="text-sm font-bold">
                For Entry through UTME into 100L:
              </li>
            </ol>

            <ol className="ml-3.5">
              <li type="a" className="text-sm text-[#666]">
                Current UTME results with a score of 150 and above;
              </li>
              <li type="a" className="text-sm text-[#666]">
                'O' Level results, (SSCE/GCE/WAEC/NECO/NABTEB) or equivalent,
                showing five (5) credit passes at not more than two (2)
                sittings; one (1) sitting only for professional courses
              </li>
              <li type="a" className="text-sm text-[#666]">
                JAMB slip showing the desired course of study and Lead City
                University as first choice Medicine, Dentistry, Pharmacy, and
                Physiotherapy.
              </li>
            </ol>

            <h2 className="xl:text-3xl max-xl:text-xl font-bold">
              For Direct Entry admissions into 200L:
            </h2>

            <ol className="ml-3.5">
              <li type="a" className="text-sm text-[#666]">
                International Baccalaureate, IB, IJMB/JUPEB, with at least three
                (3) ‘A’ Level passes (A, B, or C) in relevant subjects for all
                professional courses* and at least two (2) ‘A’ Level passes in
                relevant subjects for other courses.
              </li>
              <li type="a" className="text-sm text-[#666]">
                'O' Level results, (SSCE/GCE/WAEC/NECO/NABTEB) or equivalent,
                showing five (5) credit passes
              </li>
            </ol>

            <ol className="ml-3.5">
              <li type="a" className="text-sm text-[#666]">
                A JAMB admission letter (issued at the point of admission into
                previous university)
              </li>
              <li type="a" className="text-sm text-[#666]">
                Complete 100L transcript from the previous university with a
                CGPA of 3.5 for all professional courses and 1.8 for other
                courses.
              </li>
              <li type="a" className="text-sm text-[#666]">
                As soon as you have gathered all documents, you may begin your
                application process by following the simple steps outlined
                below:
              </li>
            </ol>

            <h3 className="xl:text-xl max-xl:text-lg font-bold">
              Application Steps
            </h3>

            <ol className="ml-3.5">
              <li type="1" className="text-sm text-[#666]">
                Create an account by providing your basic information and a
                functional email address.
              </li>
              <li type="1" className="text-sm text-[#666]">
                Fill out the application form, including personal details,
                educational background, and any additional required information.
              </li>
              <li type="1" className="text-sm text-[#666]">
                Upload the required documents, such as UTME results, O'Level
                results, transcripts, Birth certificate,NIN slip etc
              </li>
              <li type="1" className="text-sm text-[#666]">
                Review your application for accuracy and completeness.
              </li>
              <li type="1" className="text-sm text-[#666]">
                Make your payment using the online payment link
              </li>
              <li type="1" className="text-sm text-[#666]">
                Submit your application, and you're done!
              </li>
            </ol>

            <p className="text-sm text-[#666]">
              You will receive a notification that your application has been
              received and your application will be processed within 24 (working
              ) hours.
              <br />
              Successful applicants will be contacted by the email supplied at
              the start of the application process.
              <br />
              We value your interest in our university and look forward to
              reviewing your application.
            </p>

            <h3 className="text-sm font-bold">
              Candidates awaiting results can also apply.
            </h3>

            <Link
              to={"https://admissions.lcu.edu.ng/"}
              target="_blank"
              className="bg-[#24ac3a] text-white py-2 px-4 w-fit"
            >
              Click to Begin Application
            </Link>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold">
                General Requirements (JAMB/Direct Entry)
              </h3>
              <p className="text-sm text-[#666]">
                The minimum entry requirement for admission into Lead City
                University is GCE O/L, SSCE/NABTEB/ NECO or equivalent credit
                level pass in five(5) subjects, including English Language, and
                Mathematics, obtained at not more than two sittings. Those with
                additional (Direct Entry) qualifications such as University
                Diploma, NCE, IJMB, OND, GCE 'A' Level or equivalent
                professional qualification, etc will be admitted into 200 level.
                Candidates awaiting result may apply provided evidence of
                results would be available before resumption.
              </p>
            </div>

            <p className="text-sm font-bold">
              Email:{" "}
              <Link
                to={"mailto:admissions@lcu.edu.ng"}
                className="text-[#fa7252]"
              >
                admissions@lcu.edu.ng
              </Link>
            </p>

            <h3 className="text-sm font-bold">
              Lead City University Admission Forms are also available at:
            </h3>

            <ul className="ml-3.5">
              <li className="text-sm text-[#666] list-disc">
                LCU Lagos Liaison Office : E10, Adeniran Ogunsanya Shopping
                Mall, (Same mall as Shoprite, 1st floor) Surulere, Lagos.{" "}
                <Link to={"tel: 01-2912629"} className="text-[#fa7252]">
                  Tel: 01-2912629, 07044043322, +234 907 742 2233
                </Link>
              </li>{" "}
              <li className="text-sm text-[#666] list-disc">
                Abuja Liaison Office I: Blooms Academy, 45 Main Street, Suncity
                Abuja
              </li>{" "}
              <li className="text-sm text-[#666] list-disc">
                Abuja Liaison Office II: Epitome Model Islamic Schools, off Sani
                Abacha Road, Mararaba, Abuja
              </li>{" "}
              <li className="text-sm text-[#666] list-disc">
                Abuja Liason Office III: Suite 308B, The Capital Hub, 272 Ahmadu
                Bello Way, Abuja.
              </li>{" "}
              <Link to={"tel: +234 912 321 2605"} className="text-[#fa7252]">
                Tel: +234 912 321 2605
              </Link>{" "}
              <li className="text-sm text-[#666] list-disc">
                Rivers State Liaison Office: 3 East-West Road Rumukwurushii
                Tanki Port Harcourt.{" "}
                <Link to={"tel: 08030500006"} className="text-[#fa7252]">
                  Tel: 08030500006
                </Link>
              </li>
            </ul>

            <p className="text-sm text-[#666]">
              Please note that:
              <br />
              The appointed agents acting on behalf of the University are not
              allowed to collect money from applicants as they will be paid by
              the University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsPage;
