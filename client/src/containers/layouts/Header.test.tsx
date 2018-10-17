// Jest snapshot test
import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Header } from "./Header";
import "./Header.less";

describe("Header testing", () => {

    test("header is loading correctly", () => {
        const component = TestRenderer.create(
            <Header />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});