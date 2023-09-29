import React from "react";
import "./footer.css";

function Footer() {
    const tableStyle = {
        width: "60%",
        margin: "center",
    };

  return (
    <footer className="footer">
      <p>Contact us at:</p>
      <p>(407) 123-4567</p>
      <p>sales@cystalclearsounds.com</p>
      <p>Business Hours:</p>

      <table style={tableStyle}>
        <tbody>
        <tr>
          <td>Monday</td>
          <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        <tr>
            <td>Tuesday</td>
            <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        <tr>
            <td>Thursday</td>
            <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        <tr>
            <td>Saturday</td>
            <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>8:00 a.m. - 9:00 p.m.</td>
        </tr>
        </tbody>
      </table>
      <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
