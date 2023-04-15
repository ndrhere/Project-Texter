import React from "react";
import { useState } from "react";
import { jsPDF } from "jspdf";

const Textform = (props) => {
  const [text, setText] = useState("Enter Your Text");

  const handleUppClick = () => {
    let upper = text.toUpperCase();
    setText(upper);
  };

  const handleLowClick = () => {
    let lower = text.toLowerCase();
    setText(lower);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopyText = () => {
    let textarea = document.getElementById("textarea");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let removeExtra = text.replace(/\s+/g, " ");
    setText(removeExtra);
  };
  // /\s+/g is a regular expression that matches one or more whitespace characters in a string. The forward slashes (/) are used to delimit the regular expression, and the \s is a special character that represents any whitespace character, including spaces, tabs, and newlines. The + character means "one or more", so \s+ means one or more whitespace characters. Finally, the g flag indicates that the regular expression should match all occurrences of one or more whitespace characters within the string, rather than just the first occurrence.

  const handlePdfDownload = () => {
    const doc = new jsPDF();
    // Set margin on all sides to 10
    const margin = 10;
    
    // Calculate available width and height after applying margins
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const usableWidth = pageWidth - (margin * 2);
    const usableHeight = pageHeight - (margin * 2);
    
    // Add the text to the PDF with margin applied
    doc.text(text, margin, margin, { maxWidth: usableWidth, maxHeight: usableHeight });
    
    // Save the PDF
    doc.save("text.pdf");
    props.showAlert("Text successfully downloaded", "success");
  };
  //Here we have written the code for handling pdf download. To do that we have to install a pdf library by npm install jspdf which is a popular pdf library for react. After that we have assigned the new jspadf() a variable named doc and then we have to write .text method of jspdf which takes three parameters first of which is the text and then 2nd one is the dimension of the text in the pdf with x axis and the third one is the dimension of the text in the Y axix. Here we have given them the value 10 and 10 and then finally we will sav ethat text by writing text.save() with the name with whcih we want to save it.

  // Remember we have also used onChange property on Textarea so that we can select the value of the text and can then pass it to doc.text as 1st parameter. We could have also used useRef in the place of handleChange method where we would have to import useRef and then would have to give a value to ref in the textarea as ref={textarearefe}(suppose) and then we would have to put this giv ethis textarearef an initial value as const textarearef = useRef(null), and the inside handlePdfDownload method we have to give text a value as const text = textarearef.current.value
  return (
    <div>
      <div
        className=" my-3 mx-5"
        id="box"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Enter your text below</h2>
        <div className="mb-3">
          <label htmlFor="My Box" className="form-label"></label>

          <textarea
            className="form-control"
            id="textarea"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgba(64,65,79,1)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleChange}
            toggleMode={props.toggleMode}
          ></textarea>
        </div>

        <button
          onClick={handleUppClick}
          type="button"
          className="btn btn-primary my-4 mx-2 "
        >
          UpperCase
        </button>
        <button
          onClick={handleLowClick}
          type="button"
          className="btn btn-primary mx-2"
        >
          LowerCase
        </button>
        <button
          onClick={handleClear}
          type="button"
          className="btn btn-primary mx-2"
        >
          Clear Text
        </button>
        <button
          onClick={handleCopyText}
          type="button"
          className="btn btn-primary mx-2"
        >
          Copy Text
        </button>
        <button
          onClick={handleExtraSpaces}
          type="button"
          className="btn btn-primary mx-2"
        >
          Remove Extra Spaces
        </button>

        <button
          onClick={handlePdfDownload}
          type="button"
          className="btn btn-primary mx-2"
        >
          Download PDF
        </button>

        <div>
          <h6>Total Number of Characters : {text.length} </h6>
          <h6>
            Total Number of words :{" "}
            {text.split(/\s+/).filter((word) => word !== "").length}
          </h6>

          {/* The above can also be written as this:  */}
          {/* <h6>Total Number of words : {text.split(/\s+/).filter(word => word.length!==0).length}</h6> */}

          {/* //The Above statement means that to return  words whose length should not be equal to zero had we put ' ' like this it would have wrong because now it will return the words whose length should not be equal to 1 but spaces like this ' ' do have length of 1// */}

          {/* //suppose humlog likhte hain "My Name is Narendra     " narendra likhne ke baad humlog jitna bhi space denge wo ek '','','','','' banta jaega now when we write to filter word!=='' it would remove all the spaces but agar humlog ese likhte hain that filter word!==' ' to ye space yani ki '' ko count kar lega as 1 character beacuse esko to us string me ' ' mila hi ni filter karne ko  */}
        </div>
      </div>
    </div>
  );
};

export default Textform;
