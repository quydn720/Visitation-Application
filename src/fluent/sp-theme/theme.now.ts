import "@servicenow/sdk/global";
import { SPTheme } from "@servicenow/sdk/core";
import { visitationHeader } from "../sp-header-footer/visitation_header/header.now";

export const visitationTheme = SPTheme({
  $id: Now.ID["visitation_theme"],
  name: "Visitation Theme",
  header: visitationHeader,
  fixedHeader: true,
  customCss: `
    // ── Grays ──
    $gray-base: #000000;
    $gray-dark: sp-rgb(--now-color--neutral-16, #1D272B) !default;
    $gray-darker: sp-rgb(--now-color--neutral-18, #10171A) !default;
    $gray-light: sp-rgb(--now-color--neutral-9, #616D74) !default;
    $gray-lighter: sp-rgb(--now-color--neutral-1, #F5F6F7) !default;
    $gray: sp-rgb(--now-color--neutral-11, #3D4A50) !default;

    // ── Brand ──
    $brand-primary: sp-rgb(--now-color--primary-1, #0080A3) !default;
    $brand-primary-dark: sp-rgb(--now-color--primary-2, #00566E) !default;
    $brand-primary-darker: sp-rgb(--now-color--primary-3, #002D39) !default;
    $brand-primary-light: sp-rgb(--now-color--interactive-1, #5EAFC5) !default;
    $brand-primary-lighter: sp-rgb(--now-color--primary-0, #BDDEE7) !default;
    $body-bg: sp-rgb(--now-color_background--primary, #FFFFFF) !default;
    $body-bg-tertiary: sp-rgb(--now-color_background--tertiary, #E2E5E7) !default;
    $brand-success: sp-rgb(--now-color_alert--positive-3, #3E8600) !default;
    $brand-warning: sp-rgb(--now-color_alert--warning-3, #B29800) !default;
    $brand-danger: sp-rgb(--now-color_alert--critical-3, #E52239) !default;
    $brand-info: sp-rgb(--now-color_alert--info-3, #007AC9) !default;

    // ── Text ──
    $text-color: sp-rgb(--now-color_text--primary, #10171A) !default;
    $text-muted: sp-rgb(--now-color_text--tertiary, #37444A) !default;
    $text-primary: sp-rgb(--now-color_text--primary, #10171A);
    $text-secondary: sp-rgb(--now-color_text--secondary, #232E33) !default;
    $text-tertiary: sp-rgb(--now-color_text--tertiary, #37444A);
    $link-color: sp-rgb(--now-color--link-2, #1955BE);
    $link-hover-color: sp-rgb(--now-color--link-3, #113A82);

    // ── Backgrounds ──
    $background-primary: sp-rgb(--now-color_background--primary, #FFFFFF);
    $background-secondary: sp-rgb(--now-color_background--secondary, #F5F6F7);
    $background-tertiary: sp-rgb(--now-color_background--tertiary, #E2E5E7);

    // ── Borders ──
    $border-primary: sp-rgb(--now-color_border--primary, #737F84);
    $border-secondary: sp-rgb(--now-color_border--secondary, #AAB2B6);
    $border-tertiary: sp-rgb(--now-color_border--tertiary, #CFD5D7);

    // ── Navbar ──
    $sp-navbar-divider-color: sp-rgb(--now-color_divider--tertiary, #CFD5D7) !default;
    $navbar-inverse-bg: sp-rgb(--now-color_background--primary, #FFFFFF) !default;
    $navbar-inverse-link-color: sp-rgb(--now-color_text--primary, #10171A) !default;
    $navbar-inverse-link-hover-color: sp-rgb(--now-color_text--primary, #10171A) !default;
    $navbar-inverse-link-active-color: sp-rgb(--now-color_text--primary, #10171A) !default;
    $navbar-inverse-link-hover-bg: sp-rgb(--now-color--primary-0, #BDDEE7) !default;
    $navbar-inverse-link-active-bg: sp-rgb(--now-color_background--secondary, #F5F6F7);

    // ── Buttons ──
    $btn-primary-color: sp-rgb(--now-color_text--primary-actionable, #FFFFFF) !default;
    $btn-primary-bg: $brand-primary-dark;
    $btn-primary-border: $brand-primary-dark;
    $btn-default-bg: $background-primary;
    $btn-default-color: $brand-primary-dark;
    $btn-default-border: sp-rgb(--now-color_border--tertiary, #CFD5D7) !default;
    $btn-success-bg: $brand-success;
    $btn-success-border: $brand-success;
    $btn-success-color: $btn-primary-color;

    // ── Component / Selection ──
    $component-active-color: $gray;
    $component-active-bg: sp-rgb(--now-color_background--secondary, #F5F6F7) !default;
    $selection-primary: sp-rgb(--now-color_selection--primary-0, #E0EADE) !default;
    $input-border: sp-rgb(--now-color_border--primary, #737F84) !default;
    $input-border-focus: sp-rgb(--now-color--focus-ring, #359325) !default;

    // ── States / Alerts ──
    $state-success-bg: sp-rgb(--now-color_alert--positive-0, #C7DCB5) !default;
    $state-warning-bg: sp-rgb(--now-color_alert--warning-0, #ECE5BF) !default;
    $state-danger-bg: sp-rgb(--now-color_alert--critical-0, #F9C8CE) !default;
    $state-info-bg: sp-rgb(--now-color_alert--info-0, #BDDCF1) !default;
    $alert-success-border: sp-rgb(--now-color_alert--positive-1, #99BF78) !default;
    $alert-warning-border: sp-rgb(--now-color_alert--warning-1, #FFEA72) !default;
    $alert-danger-border: sp-rgb(--now-color_alert--critical-1, #F2919C) !default;
    $alert-info-border: sp-rgb(--now-color_alert--info-1, #7DBBE3) !default;

    // ── Panels / Forms / Tables ──
    $panel-primary-text: sp-rgb(--now-color_text--primary-actionable, #FFFFFF) !default;
    $panel-border-color: $border-tertiary !default;
    $sp-page-bg: sp-rgb(--now-color_background--secondary, #F5F6F7);
    $sp-form-field--background-color: sp-rgb(--now-form-field--background-color, #FFFFFF);
  `,
});
