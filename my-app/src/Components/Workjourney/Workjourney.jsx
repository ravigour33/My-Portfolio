import React from "react";
import "./Workjourney.css";
import "../../assets/bb.jpg";


export default function WorkJourney() {
return (
<section className="timeline">
<div className="tinner">
<h1 className="W-heading">Work Journey</h1>


<article>
<div className="timeline__content">
<h1>Techinfini Solutions</h1>
<time dateTime="2005">2025 Present</time>
<hr />
<p>
In September 2025, I joined Techinfini Solutions as an Associate
Software Engineer. I worked across React, Shopify, and WordPress,
contributing to multiple client projects. My role involved
developing custom features, optimizing performance, and delivering
high-quality solutions within deadlines.
</p>
</div>
<img
src="https://images.unsplash.com/photo-1753788132128-a6198b5d2f80?w=400"
alt="camera on a map on a desk"
/>
</article>


<article>
<div className="timeline__content">
<h1>Wiz91 Technologies</h1>
<time dateTime="2006">2025</time>
<hr />
<p>
In February 2025, I joined as a Full Stack WordPress Developer and
Shopify Developer. My work included custom WordPress theme
development, theme customization, and handling both frontend and
backend tasks. On Shopify, I worked extensively with Liquid coding
and successfully developed multiple Shopify stores from scratch,
delivering fast, responsive, and high-converting websites.
</p>
</div>
<img
src="https://images.unsplash.com/photo-1755371033904-21dd8a9d002b?w=400"
alt="mountain landscape"
/>
</article>


<article>
<div className="timeline__content">
<h1>CodingKart It Services</h1>
<time dateTime="2005">2024</time>
<hr />
<p>
I worked as a Frontend Developer from March 2024 to February
2025, including a three-month internship. During this period, I
built responsive user interfaces, optimized website performance,
and collaborated closely with the development team to deliver
high-quality web features.
</p>
</div>
<img
src="https://images.unsplash.com/photo-1753788132128-a6198b5d2f80?w=400"
alt="camera on a map on a desk"
/>
</article>
</div>
</section>
);
}