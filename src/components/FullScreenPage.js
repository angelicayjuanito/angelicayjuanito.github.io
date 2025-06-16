import React from 'react'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from "@ap.cx/react-fullpage";
import {Welcome} from "../pages/Welcome";
import {Presentation} from "../pages/Presentation";
import {MovieListing} from "../pages/MovieListing";
import {Allocations} from "../pages/Allocations";
import {Directions} from "../pages/Directions";
import Notes from "../pages/Notes";
import {Recommendations} from "../pages/Recommendations";
import {Present} from "../pages/Present";
import {Confirmation} from "../pages/Confirmation";


export const FullScreenPage = () => {
    return (
        <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style={{ height: "100vh" }}><Welcome/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Presentation/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><MovieListing/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Allocations/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Directions/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Notes/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Recommendations/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Present/></FullpageSection>
                <FullpageSection style={{ height: "100vh" }}><Confirmation/></FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}
