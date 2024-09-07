"use client"
import React, { useState } from "react";

import { createRoot } from "react-dom/client";

import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";

function App() {
 

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
      />
      <title>eCommerce Referral - App | Vuexy - Bootstrap Admin Template</title>
      <meta
        name="description"
        content="Start your development with a Dashboard for Bootstrap 5"
      />
      <meta
        name="keywords"
        content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5"
      />
      {/* Canonical SEO */}
      <link rel="canonical" href="https://1.envato.market/vuexy_admin" />
      {/* ? PROD Only: Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
      {/* End Google Tag Manager */}
      {/* Favicon */}
      <link
        rel="icon"
        type="image/x-icon"
        href="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/favicon/favicon.ico"
      />
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap"
        rel="stylesheet"
      />
      {/* Icons */}
      <link rel="stylesheet" href="../" />
      <link rel="stylesheet" href="./assets/vendor/fonts/tabler-icons.css" />
      <link rel="stylesheet" href="./assets/vendor/fonts/flag-icons.css" />
      {/* Core CSS */}
      <link
        rel="stylesheet"
        href="./assets/vendor/css/rtl/core.css"
        className="template-customizer-core-css"
      />
      <link
        rel="stylesheet"
        href="./assets/vendor/css/rtl/theme-default.css"
        className="template-customizer-theme-css"
      />
      <link rel="stylesheet" href="../../assets/css/demo.css" />
      {/* Vendors CSS */}
      <link
        rel="stylesheet"
        href="../../assets/vendor/libs/node-waves/node-waves.css"
      />
      <link
        rel="stylesheet"
        href="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
      />
      <link
        rel="stylesheet"
        href="../../assets/vendor/libs/typeahead-js/typeahead.css"
      />
      <link
        rel="stylesheet"
        href="../../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css"
      />
      <link
        rel="stylesheet"
        href="../../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css"
      />
      <link
        rel="stylesheet"
        href="../../assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css"
      />
      {/* App CSS */}
      {/* Helpers */}
      {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
      {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
      {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
      {/* ?PROD Only: Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J3LMKC"
        height="0" width="0" style="display: none; visibility:
        hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          {/* Menu */}
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo ">
              <a href="index.html" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <svg
                    width={32}
                    height={22}
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0"
                    />
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                    />
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0"
                    />
                  </svg>
                </span>
                <span className="app-brand-text demo menu-text fw-bold">
                  Vuexy
                </span>
              </a>
              <a
                href="javascript:void(0);"
                className="layout-menu-toggle menu-link text-large ms-auto"
              >
                <i className="ti menu-toggle-icon d-none d-xl-block align-middle" />
                <i className="ti ti-x d-block d-xl-none ti-md align-middle" />
              </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
              {/* Dashboards */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-smart-home" />
                  <div data-i18n="Dashboards">Dashboards</div>
                  <div className="badge bg-danger rounded-pill ms-auto">5</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="index.html" className="menu-link">
                      <div data-i18n="Analytics">Analytics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="dashboards-crm.html" className="menu-link">
                      <div data-i18n="CRM">CRM</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="app-ecommerce-dashboard.html"
                      className="menu-link"
                    >
                      <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="app-logistics-dashboard.html"
                      className="menu-link"
                    >
                      <div data-i18n="Logistics">Logistics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-academy-dashboard.html" className="menu-link">
                      <div data-i18n="Academy">Academy</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Layouts */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-layout-sidebar" />
                  <div data-i18n="Layouts">Layouts</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="layouts-collapsed-menu.html" className="menu-link">
                      <div data-i18n="Collapsed menu">Collapsed menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-content-navbar.html" className="menu-link">
                      <div data-i18n="Content navbar">Content navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="layouts-content-navbar-with-sidebar.html"
                      className="menu-link"
                    >
                      <div data-i18n="Content nav + Sidebar">
                        Content nav + Sidebar
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://demos.pixinvent.com/vuexy-html-admin-template/html/horizontal-menu-template"
                      className="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Horizontal">Horizontal</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-menu.html" className="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-navbar.html" className="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-fluid.html" className="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-container.html" className="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-blank.html" className="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Front Apps */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-files" />
                  <div data-i18n="Front Apps">Front Apps</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-Apps/landing-App.html"
                      className="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Landing">Landing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-Apps/pricing-App.html"
                      className="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Pricing">Pricing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-Apps/payment-App.html"
                      className="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Payment">Payment</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-Apps/checkout-App.html"
                      className="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-Apps/help-center-landing.html"
                      className="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Help Center">Help Center</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Apps & Apps */}
              <li className="menu-header small">
                <span className="menu-header-text" data-i18n="Apps & Apps">
                  Apps &amp; Apps
                </span>
              </li>
              <li className="menu-item">
                <a href="app-email.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-mail" />
                  <div data-i18n="Email">Email</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-chat.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-messages" />
                  <div data-i18n="Chat">Chat</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-calendar.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-calendar" />
                  <div data-i18n="Calendar">Calendar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-kanban.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-layout-kanban" />
                  <div data-i18n="Kanban">Kanban</div>
                </a>
              </li>
              {/* e-commerce-app menu start */}
              <li className="menu-item active open">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-shopping-cart" />
                  <div data-i18n="eCommerce">eCommerce</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="app-ecommerce-dashboard.html"
                      className="menu-link"
                    >
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Products">Products</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-product-list.html"
                          className="menu-link"
                        >
                          <div data-i18n="Product List">Product List</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-product-add.html"
                          className="menu-link"
                        >
                          <div data-i18n="Add Product">Add Product</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-category-list.html"
                          className="menu-link"
                        >
                          <div data-i18n="Category List">Category List</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Order">Order</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-order-list.html"
                          className="menu-link"
                        >
                          <div data-i18n="Order List">Order List</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-order-details.html"
                          className="menu-link"
                        >
                          <div data-i18n="Order Details">Order Details</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Customer">Customer</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-customer-all.html"
                          className="menu-link"
                        >
                          <div data-i18n="All Customers">All Customers</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="javascript:void(0);"
                          className="menu-link menu-toggle"
                        >
                          <div data-i18n="Customer Details">
                            Customer Details
                          </div>
                        </a>
                        <ul className="menu-sub">
                          <li className="menu-item">
                            <a
                              href="app-ecommerce-customer-details-overview.html"
                              className="menu-link"
                            >
                              <div data-i18n="Overview">Overview</div>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              href="app-ecommerce-customer-details-security.html"
                              className="menu-link"
                            >
                              <div data-i18n="Security">Security</div>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              href="app-ecommerce-customer-details-billing.html"
                              className="menu-link"
                            >
                              <div data-i18n="Address & Billing">
                                Address &amp; Billing
                              </div>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              href="app-ecommerce-customer-details-notifications.html"
                              className="menu-link"
                            >
                              <div data-i18n="Notifications">Notifications</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="app-ecommerce-manage-reviews.html"
                      className="menu-link"
                    >
                      <div data-i18n="Manage Reviews">Manage Reviews</div>
                    </a>
                  </li>
                  <li className="menu-item active">
                    <a href="app-ecommerce-referral.html" className="menu-link">
                      <div data-i18n="Referrals">Referrals</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Settings">Settings</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-settings-detail.html"
                          className="menu-link"
                        >
                          <div data-i18n="Store Details">Store Details</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-settings-payments.html"
                          className="menu-link"
                        >
                          <div data-i18n="Payments">Payments</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-settings-checkout.html"
                          className="menu-link"
                        >
                          <div data-i18n="Checkout">Checkout</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-settings-shipping.html"
                          className="menu-link"
                        >
                          <div data-i18n="Shipping & Delivery">
                            Shipping &amp; Delivery
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-settings-locations.html"
                          className="menu-link"
                        >
                          <div data-i18n="Locations">Locations</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-ecommerce-settings-notifications.html"
                          className="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* e-commerce-app menu end */}
              {/* Academy menu start */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-book" />
                  <div data-i18n="Academy">Academy</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-academy-dashboard.html" className="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-academy-course.html" className="menu-link">
                      <div data-i18n="My Course">My Course</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="app-academy-course-details.html"
                      className="menu-link"
                    >
                      <div data-i18n="Course Details">Course Details</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Academy menu end */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-truck" />
                  <div data-i18n="Logistics">Logistics</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="app-logistics-dashboard.html"
                      className="menu-link"
                    >
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-logistics-fleet.html" className="menu-link">
                      <div data-i18n="Fleet">Fleet</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-file-dollar" />
                  <div data-i18n="Invoice">Invoice</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-invoice-list.html" className="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-preview.html" className="menu-link">
                      <div data-i18n="Preview">Preview</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-edit.html" className="menu-link">
                      <div data-i18n="Edit">Edit</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-add.html" className="menu-link">
                      <div data-i18n="Add">Add</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-users" />
                  <div data-i18n="Users">Users</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-user-list.html" className="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="View">View</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="app-user-view-account.html"
                          className="menu-link"
                        >
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-user-view-security.html"
                          className="menu-link"
                        >
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-user-view-billing.html"
                          className="menu-link"
                        >
                          <div data-i18n="Billing & Plans">
                            Billing &amp; Plans
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-user-view-notifications.html"
                          className="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="app-user-view-connections.html"
                          className="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-settings" />
                  <div data-i18n="Roles & Permissions">
                    Roles &amp; Permissions
                  </div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-access-roles.html" className="menu-link">
                      <div data-i18n="Roles">Roles</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-access-permission.html" className="menu-link">
                      <div data-i18n="Permission">Permission</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-file" />
                  <div data-i18n="Apps">Apps</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="User Profile">User Profile</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a href="Apps-profile-user.html" className="menu-link">
                          <div data-i18n="Profile">Profile</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="Apps-profile-teams.html" className="menu-link">
                          <div data-i18n="Teams">Teams</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-profile-projects.html"
                          className="menu-link"
                        >
                          <div data-i18n="Projects">Projects</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-profile-connections.html"
                          className="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Account Settings">Account Settings</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="Apps-account-settings-account.html"
                          className="menu-link"
                        >
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-account-settings-security.html"
                          className="menu-link"
                        >
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-account-settings-billing.html"
                          className="menu-link"
                        >
                          <div data-i18n="Billing & Plans">
                            Billing &amp; Plans
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-account-settings-notifications.html"
                          className="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-account-settings-connections.html"
                          className="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="Apps-faq.html" className="menu-link">
                      <div data-i18n="FAQ">FAQ</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="Apps-pricing.html" className="menu-link">
                      <div data-i18n="Pricing">Pricing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Misc">Misc</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="Apps-misc-error.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Error">Error</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-misc-under-maintenance.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Under Maintenance">
                            Under Maintenance
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-misc-comingsoon.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Coming Soon">Coming Soon</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="Apps-misc-not-authorized.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Not Authorized">Not Authorized</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-lock" />
                  <div data-i18n="Authentications">Authentications</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Login">Login</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="auth-login-basic.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-login-cover.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Register">Register</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="auth-register-basic.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-register-cover.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-register-multisteps.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Multi-steps">Multi-steps</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Verify Email">Verify Email</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="auth-verify-email-basic.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-verify-email-cover.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Reset Password">Reset Password</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="auth-reset-password-basic.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-reset-password-cover.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Forgot Password">Forgot Password</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="auth-forgot-password-basic.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-forgot-password-cover.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Two Steps">Two Steps</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="auth-two-steps-basic.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="auth-two-steps-cover.html"
                          className="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-forms" />
                  <div data-i18n="Wizard Examples">Wizard Examples</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="wizard-ex-checkout.html" className="menu-link">
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="wizard-ex-property-listing.html"
                      className="menu-link"
                    >
                      <div data-i18n="Property Listing">Property Listing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="wizard-ex-create-deal.html" className="menu-link">
                      <div data-i18n="Create Deal">Create Deal</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="modal-examples.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-square" />
                  <div data-i18n="Modal Examples">Modal Examples</div>
                </a>
              </li>
              {/* Components */}
              <li className="menu-header small">
                <span className="menu-header-text" data-i18n="Components">
                  Components
                </span>
              </li>
              {/* Cards */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-id" />
                  <div data-i18n="Cards">Cards</div>
                  <div className="badge bg-primary rounded-pill ms-auto">5</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="cards-basic.html" className="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-advance.html" className="menu-link">
                      <div data-i18n="Advance">Advance</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-statistics.html" className="menu-link">
                      <div data-i18n="Statistics">Statistics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-analytics.html" className="menu-link">
                      <div data-i18n="Analytics">Analytics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-actions.html" className="menu-link">
                      <div data-i18n="Actions">Actions</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* User interface */}
              <li className="menu-item">
                <a href="javascript:void(0)" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-color-swatch" />
                  <div data-i18n="User interface">User interface</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="ui-accordion.html" className="menu-link">
                      <div data-i18n="Accordion">Accordion</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-alerts.html" className="menu-link">
                      <div data-i18n="Alerts">Alerts</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-badges.html" className="menu-link">
                      <div data-i18n="Badges">Badges</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-buttons.html" className="menu-link">
                      <div data-i18n="Buttons">Buttons</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-carousel.html" className="menu-link">
                      <div data-i18n="Carousel">Carousel</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-collapse.html" className="menu-link">
                      <div data-i18n="Collapse">Collapse</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-dropdowns.html" className="menu-link">
                      <div data-i18n="Dropdowns">Dropdowns</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-footer.html" className="menu-link">
                      <div data-i18n="Footer">Footer</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-list-groups.html" className="menu-link">
                      <div data-i18n="List Groups">List groups</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-modals.html" className="menu-link">
                      <div data-i18n="Modals">Modals</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-navbar.html" className="menu-link">
                      <div data-i18n="Navbar">Navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-offcanvas.html" className="menu-link">
                      <div data-i18n="Offcanvas">Offcanvas</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="ui-pagination-breadcrumbs.html"
                      className="menu-link"
                    >
                      <div data-i18n="Pagination & Breadcrumbs">
                        Pagination &amp; Breadcrumbs
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-progress.html" className="menu-link">
                      <div data-i18n="Progress">Progress</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-spinners.html" className="menu-link">
                      <div data-i18n="Spinners">Spinners</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-tabs-pills.html" className="menu-link">
                      <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-toasts.html" className="menu-link">
                      <div data-i18n="Toasts">Toasts</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-tooltips-popovers.html" className="menu-link">
                      <div data-i18n="Tooltips & Popovers">
                        Tooltips &amp; Popovers
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-typography.html" className="menu-link">
                      <div data-i18n="Typography">Typography</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Extended components */}
              <li className="menu-item">
                <a href="javascript:void(0)" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-components" />
                  <div data-i18n="Extended UI">Extended UI</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="extended-ui-avatar.html" className="menu-link">
                      <div data-i18n="Avatar">Avatar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-blockui.html" className="menu-link">
                      <div data-i18n="BlockUI">BlockUI</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="extended-ui-drag-and-drop.html"
                      className="menu-link"
                    >
                      <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="extended-ui-media-player.html"
                      className="menu-link"
                    >
                      <div data-i18n="Media Player">Media Player</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="extended-ui-perfect-scrollbar.html"
                      className="menu-link"
                    >
                      <div data-i18n="Perfect Scrollbar">Perfect Scrollbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="extended-ui-star-ratings.html"
                      className="menu-link"
                    >
                      <div data-i18n="Star Ratings">Star Ratings</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="extended-ui-sweetalert2.html"
                      className="menu-link"
                    >
                      <div data-i18n="SweetAlert2">SweetAlert2</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="extended-ui-text-divider.html"
                      className="menu-link"
                    >
                      <div data-i18n="Text Divider">Text Divider</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript:void(0);"
                      className="menu-link menu-toggle"
                    >
                      <div data-i18n="Timeline">Timeline</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                          href="extended-ui-timeline-basic.html"
                          className="menu-link"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="extended-ui-timeline-fullscreen.html"
                          className="menu-link"
                        >
                          <div data-i18n="Fullscreen">Fullscreen</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-tour.html" className="menu-link">
                      <div data-i18n="Tour">Tour</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-treeview.html" className="menu-link">
                      <div data-i18n="Treeview">Treeview</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-misc.html" className="menu-link">
                      <div data-i18n="Miscellaneous">Miscellaneous</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Icons */}
              <li className="menu-item">
                <a href="javascript:void(0)" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-brand-tabler" />
                  <div data-i18n="Icons">Icons</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="icons-tabler.html" className="menu-link">
                      <div data-i18n="Tabler">Tabler</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="icons-font-awesome.html" className="menu-link">
                      <div data-i18n="Fontawesome">Fontawesome</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Forms & Tables */}
              <li className="menu-header small">
                <span className="menu-header-text" data-i18n="Forms & Tables">
                  Forms &amp; Tables
                </span>
              </li>
              {/* Forms */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-toggle-left" />
                  <div data-i18n="Form Elements">Form Elements</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="forms-basic-inputs.html" className="menu-link">
                      <div data-i18n="Basic Inputs">Basic Inputs</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-input-groups.html" className="menu-link">
                      <div data-i18n="Input groups">Input groups</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-custom-options.html" className="menu-link">
                      <div data-i18n="Custom Options">Custom Options</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-editors.html" className="menu-link">
                      <div data-i18n="Editors">Editors</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-file-upload.html" className="menu-link">
                      <div data-i18n="File Upload">File Upload</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-pickers.html" className="menu-link">
                      <div data-i18n="Pickers">Pickers</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-selects.html" className="menu-link">
                      <div data-i18n="Select & Tags">Select &amp; Tags</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-sliders.html" className="menu-link">
                      <div data-i18n="Sliders">Sliders</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-switches.html" className="menu-link">
                      <div data-i18n="Switches">Switches</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-extras.html" className="menu-link">
                      <div data-i18n="Extras">Extras</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-layout-navbar" />
                  <div data-i18n="Form Layouts">Form Layouts</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="form-layouts-vertical.html" className="menu-link">
                      <div data-i18n="Vertical Form">Vertical Form</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="form-layouts-horizontal.html"
                      className="menu-link"
                    >
                      <div data-i18n="Horizontal Form">Horizontal Form</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="form-layouts-sticky.html" className="menu-link">
                      <div data-i18n="Sticky Actions">Sticky Actions</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-text-wrap-disabled" />
                  <div data-i18n="Form Wizard">Form Wizard</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="form-wizard-numbered.html" className="menu-link">
                      <div data-i18n="Numbered">Numbered</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="form-wizard-icons.html" className="menu-link">
                      <div data-i18n="Icons">Icons</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="form-validation.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-checkbox" />
                  <div data-i18n="Form Validation">Form Validation</div>
                </a>
              </li>
              {/* Tables */}
              <li className="menu-item">
                <a href="tables-basic.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-table" />
                  <div data-i18n="Tables">Tables</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-layout-grid" />
                  <div data-i18n="Datatables">Datatables</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="tables-datatables-basic.html"
                      className="menu-link"
                    >
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="tables-datatables-advanced.html"
                      className="menu-link"
                    >
                      <div data-i18n="Advanced">Advanced</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="tables-datatables-extensions.html"
                      className="menu-link"
                    >
                      <div data-i18n="Extensions">Extensions</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Charts & Maps */}
              <li className="menu-header small">
                <span className="menu-header-text" data-i18n="Charts & Maps">
                  Charts &amp; Maps
                </span>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-chart-pie" />
                  <div data-i18n="Charts">Charts</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="charts-apex.html" className="menu-link">
                      <div data-i18n="Apex Charts">Apex Charts</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="charts-chartjs.html" className="menu-link">
                      <div data-i18n="ChartJS">ChartJS</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="maps-leaflet.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-map" />
                  <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                </a>
              </li>
              {/* Misc */}
              <li className="menu-header small">
                <span className="menu-header-text" data-i18n="Misc">
                  Misc
                </span>
              </li>
              <li className="menu-item">
                <a
                  href="https://pixinvent.ticksy.com/"
                  target="_blank"
                  className="menu-link"
                >
                  <i className="menu-icon tf-icons ti ti-lifebuoy" />
                  <div data-i18n="Support">Support</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/"
                  target="_blank"
                  className="menu-link"
                >
                  <i className="menu-icon tf-icons ti ti-file-description" />
                  <div data-i18n="Documentation">Documentation</div>
                </a>
              </li>
            </ul>
          </aside>
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-App">
            {/* Navbar */}
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
                <a
                  className="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-menu-2 ti-md" />
                </a>
              </div>
              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                {/* Search */}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item navbar-search-wrapper mb-0">
                    <a
                      className="nav-item nav-link search-toggler d-flex align-items-center px-0"
                      href="javascript:void(0);"
                    >
                      <i className="ti ti-search ti-md me-2 me-lg-4 ti-lg" />
                      <span className="d-none d-md-inline-block text-muted fw-normal">
                        Search (Ctrl+/)
                      </span>
                    </a>
                  </div>
                </div>
                {/* /Search */}
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/* Language */}
                  <li className="nav-item dropdown-language dropdown">
                    <a
                      className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-language rounded-circle ti-md" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="en"
                          data-text-direction="ltr"
                        >
                          <span>English</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="fr"
                          data-text-direction="ltr"
                        >
                          <span>French</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="ar"
                          data-text-direction="rtl"
                        >
                          <span>Arabic</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="de"
                          data-text-direction="ltr"
                        >
                          <span>German</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*/ Language */}
                  {/* Style Switcher */}
                  <li className="nav-item dropdown-style-switcher dropdown">
                    <a
                      className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-md" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="light"
                        >
                          <span className="align-middle">
                            <i className="ti ti-sun ti-md me-3" />
                            Light
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="dark"
                        >
                          <span className="align-middle">
                            <i className="ti ti-moon-stars ti-md me-3" />
                            Dark
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="system"
                        >
                          <span className="align-middle">
                            <i className="ti ti-device-desktop-analytics ti-md me-3" />
                            System
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* / Style Switcher*/}
                  {/* Quick links  */}
                  <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown">
                    <a
                      className="nav-link btn btn-text-secondary btn-icon rounded-pill btn-icon dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-layout-grid-add ti-md" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end p-0">
                      <div className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h6 className="mb-0 me-auto">Shortcuts</h6>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add shortcuts"
                          >
                            <i className="ti ti-plus text-heading" />
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-shortcuts-list scrollable-container">
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-calendar ti-26px text-heading" />
                            </span>
                            <a
                              href="app-calendar.html"
                              className="stretched-link"
                            >
                              Calendar
                            </a>
                            <small>Appointments</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-file-dollar ti-26px text-heading" />
                            </span>
                            <a
                              href="app-invoice-list.html"
                              className="stretched-link"
                            >
                              Invoice App
                            </a>
                            <small>Manage Accounts</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-user ti-26px text-heading" />
                            </span>
                            <a
                              href="app-user-list.html"
                              className="stretched-link"
                            >
                              User App
                            </a>
                            <small>Manage Users</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-users ti-26px text-heading" />
                            </span>
                            <a
                              href="app-access-roles.html"
                              className="stretched-link"
                            >
                              Role Management
                            </a>
                            <small>Permission</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-device-desktop-analytics ti-26px text-heading" />
                            </span>
                            <a href="index.html" className="stretched-link">
                              Dashboard
                            </a>
                            <small>User Dashboard</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-settings ti-26px text-heading" />
                            </span>
                            <a
                              href="Apps-account-settings-account.html"
                              className="stretched-link"
                            >
                              Setting
                            </a>
                            <small>Account Settings</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-help ti-26px text-heading" />
                            </span>
                            <a href="Apps-faq.html" className="stretched-link">
                              FAQs
                            </a>
                            <small>FAQs &amp; Articles</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className="ti ti-square ti-26px text-heading" />
                            </span>
                            <a
                              href="modal-examples.html"
                              className="stretched-link"
                            >
                              Modals
                            </a>
                            <small>Useful Popups</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Quick links */}
                  {/* Notification */}
                  <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                    <a
                      className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <span className="position-relative">
                        <i className="ti ti-bell ti-md" />
                        <span className="badge rounded-pill bg-danger badge-dot badge-notifications border" />
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-0">
                      <li className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h6 className="mb-0 me-auto">Notification</h6>
                          <div className="d-flex align-items-center h6 mb-0">
                            <span className="badge bg-label-primary me-2">
                              8 New
                            </span>
                            <a
                              href="javascript:void(0)"
                              className="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark all as read"
                            >
                              <i className="ti ti-mail-opened text-heading" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list scrollable-container">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/1.png"
                                    alt=""
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="small mb-1">
                                  Congratulation Lettie 🎉
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Won the monthly best seller gold badge
                                </small>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-danger">
                                    CF
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">Charles Franklin</h6>
                                <small className="mb-1 d-block text-body">
                                  Accepted your connection
                                </small>
                                <small className="text-muted">12hr ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/2.png"
                                    alt=""
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">New Message ✉️</h6>
                                <small className="mb-1 d-block text-body">
                                  You have new message from Natalie
                                </small>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-success">
                                    <i className="ti ti-shopping-cart" />
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Whoo! You have new order 🛒{" "}
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  ACME Inc. made new order $1,154
                                </small>
                                <small className="text-muted">1 day ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/9.png"
                                    alt=""
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Application has been approved 🚀{" "}
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Your ABC project application has been
                                  approved.
                                </small>
                                <small className="text-muted">2 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-success">
                                    <i className="ti ti-chart-pie" />
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Monthly report is generated
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  July monthly financial report is generated{" "}
                                </small>
                                <small className="text-muted">3 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/5.png"
                                    alt=""
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Send connection request
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Peter sent you connection request
                                </small>
                                <small className="text-muted">4 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/6.png"
                                    alt=""
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  New message from Jane
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Your have new message from Jane
                                </small>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-warning">
                                    <i className="ti ti-alert-triangle" />
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  CPU is running high
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  CPU Utilization Percent is currently at
                                  88.63%,
                                </small>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="border-top">
                        <div className="d-grid p-4">
                          <a
                            className="btn btn-primary btn-sm d-flex"
                            href="javascript:void(0);"
                          >
                            <small className="align-middle">
                              View all notifications
                            </small>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/*/ Notification */}
                  {/* User */}
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow p-0"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="../../assets/img/avatars/1.png"
                          alt=""
                          className="rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item mt-0"
                          href="Apps-account-settings-account.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <div className="avatar avatar-online">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt=""
                                  className="rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-0">John Doe</h6>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider my-1 mx-n2" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="Apps-profile-user.html"
                        >
                          <i className="ti ti-user me-3 ti-md" />
                          <span className="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="Apps-account-settings-account.html"
                        >
                          <i className="ti ti-settings me-3 ti-md" />
                          <span className="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="Apps-account-settings-billing.html"
                        >
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 ti ti-file-dollar me-3 ti-md" />
                            <span className="flex-grow-1 align-middle">
                              Billing
                            </span>
                            <span className="flex-shrink-0 badge bg-danger d-flex align-items-center justify-content-center">
                              4
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider my-1 mx-n2" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="Apps-pricing.html">
                          <i className="ti ti-currency-dollar me-3 ti-md" />
                          <span className="align-middle">Pricing</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="Apps-faq.html">
                          <i className="ti ti-question-mark me-3 ti-md" />
                          <span className="align-middle">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <div className="d-grid px-2 pt-2 pb-1">
                          <a
                            className="btn btn-sm btn-danger d-flex"
                            href="auth-login-cover.html"
                            target="_blank"
                          >
                            <small className="align-middle">Logout</small>
                            <i className="ti ti-logout ms-2 ti-14px" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/*/ User */}
                </ul>
              </div>
              {/* Search Small Screens */}
              <div className="navbar-search-wrapper search-input-wrapper  d-none">
                <input
                  type="text"
                  className="form-control search-input container-xxl border-0"
                  placeholder="Search..."
                  aria-label="Search..."
                />
                <i className="ti ti-x search-toggler cursor-pointer" />
              </div>
            </nav>
            {/* / Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row mb-6 g-6">
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="content-left">
                            <h5 className="mb-1">$24,983</h5>
                            <small>Total Earning</small>
                          </div>
                          <span className="badge bg-label-primary rounded-circle p-2">
                            <i className="ti ti-currency-dollar ti-lg" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="content-left">
                            <h5 className="mb-1">$8,647</h5>
                            <small>Unpaid Earning</small>
                          </div>
                          <span className="badge bg-label-success rounded-circle p-2">
                            <i className="ti ti-gift ti-lg" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="content-left">
                            <h5 className="mb-1">2,367</h5>
                            <small>Signups</small>
                          </div>
                          <span className="badge bg-label-danger rounded-circle p-2">
                            <i className="ti ti-users ti-lg" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="content-left">
                            <h5 className="mb-1">4.5%</h5>
                            <small>Conversion Rate</small>
                          </div>
                          <span className="badge bg-label-info rounded-circle p-2">
                            <i className="ti ti-infinity ti-lg" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-6 g-6">
                  <div className="col-lg-7">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="mb-1">How to use</h5>
                        {/* <WalletConnectButton/> */}
                        <p className="mb-6 card-subtitle mt-0">
                          Integrate your referral code in 3 easy steps.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-between text-center gap-6">
                          <div className="d-flex flex-column align-items-center">
                            <span className="p-4 border-1 border-primary rounded-circle border-dashed mb-0 w-px-75 h-px-75">
                              <img
                                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/svg/icons/rocket.svg"
                                alt="Rocket"
                              />
                            </span>
                            <p className="my-2 w-75">
                              Create &amp; validate your referral link and get
                            </p>
                            <h6 className="text-primary mb-0">$50</h6>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <span className="p-4 border-1 border-primary rounded-circle border-dashed mb-0 w-px-75 h-px-75">
                              <img
                                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/svg/icons/user-info.svg"
                                alt="user-info"
                              />
                            </span>
                            <p className="my-2 w-75">
                              For every new signup you get
                            </p>
                            <h6 className="text-primary mb-0">10%</h6>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <span className="p-4 border-1 border-primary rounded-circle border-dashed mb-0 w-px-75 h-px-75">
                              <img
                                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/svg/icons/paper.svg"
                                alt="paper"
                              />
                            </span>
                            <p className="my-2 w-75">
                              Get other friends to generate link and get
                            </p>
                            <h6 className="text-primary mb-0">$100</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <form className="referral-form" onsubmit="return false">
                          <div className="mb-6 mt-1">
                            <h5 className="mb-5">Invite your friends</h5>
                            <div className="d-flex gap-4 align-items-end">
                              <div className="w-100">
                                <label
                                  className="form-label mb-1"
                                  htmlFor="referralEmail"
                                >
                                  Enter friend’s email address and invite them
                                </label>
                                <input
                                  type="email"
                                  id="referralEmail"
                                  name="referralEmail"
                                  className="form-control w-100"
                                  placeholder="Email address"
                                />
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="ti ti-check ti-xs me-2" />
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-5">Share the referral link</h5>
                            <div className="d-flex gap-4 align-items-end">
                              <div className="w-100">
                                <label
                                  className="form-label mb-1"
                                  htmlFor="referralLink"
                                >
                                  Share referral link in social media
                                </label>
                                <input
                                  type="text"
                                  id="referralLink"
                                  name="referralLink"
                                  className="form-control w-100 h-px-40"
                                  placeholder="pixinvent.com/?ref=6479"
                                />
                              </div>

                              <div className="d-flex">
                                <button
                                  type="button"
                                  className="btn btn-facebook btn-icon me-2"
                                >
                                  <i className="ti ti-brand-facebook text-white ti-md" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-twitter btn-icon"
                                >
                                  <i className="ti ti-brand-twitter text-white ti-md" />
                                </button>
                               
                              </div>
                              
                             
                            </div>
                          </div>
                          <ConnectWalletButton/>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Referral List Table */}
                <div className="card">
                  <div className="card-datatable table-responsive">
                    <table className="datatables-referral table border-top">
                      <thead>
                        <tr>
                          <th />
                          <th />
                          <th>Users</th>
                          <th className="text-nowrap">Referred ID</th>
                          <th>Status</th>
                          <th>Value</th>
                          <th className="text-nowrap">Earnings</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* / Content */}
              {/* Footer */}
              <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl">
                  <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                    <div className="text-body">
                      © , made with ❤️ by{" "}
                      <a
                        href="https://pixinvent.com/"
                        target="_blank"
                        className="footer-link"
                      >
                        Aryan
                      </a>
                    </div>
                    <div className="d-none d-lg-inline-block">
                      <a
                        href="https://themeforest.net/licenses/standard"
                        className="footer-link me-4"
                        target="_blank"
                      >
                        License
                      </a>
                      <a
                        href="https://1.envato.market/pixinvent_portfolio"
                        target="_blank"
                        className="footer-link me-4"
                      >
                        More Themes
                      </a>
                      <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/"
                        target="_blank"
                        className="footer-link me-4"
                      >
                        Documentation
                      </a>
                      <a
                        href="https://pixinvent.ticksy.com/"
                        target="_blank"
                        className="footer-link d-none d-sm-inline-block"
                      >
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
              {/* / Footer */}
              <div className="content-backdrop fade" />
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout App */}
        </div>
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />
      </div>
      {/* / Layout wrapper */}
      <div className="buy-now">
        <a
          href="https://1.envato.market/vuexy_admin"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >
          Buy Now
        </a>
      </div>
      {/* Core JS */}
      {/* build:js assets/vendor/js/core.js */}
      {/* endbuild */}
      {/* Vendors JS */}
      {/* Main JS */}
      {/* App JS */}
      {/* Mirrored from demos.pixinvent.com/vuexy-html-admin-template/html/vertical-menu-template/app-ecommerce-referral.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 06 Sep 2024 18:09:03 GMT */}
      {/* beautify ignore:end */}
    </>
  );
}

export default App;
