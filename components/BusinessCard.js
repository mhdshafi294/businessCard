import React from "react"
import About from "./About"
import Info from "./Info"
import Interest from "./Interest"
import Footer from "./Footer"

export default function BusinessCard(){
    return(
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}