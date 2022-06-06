/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */

import { Header } from '@de.bitmagie/dashboard/ui';
import { dashboardUtils } from '@de.bitmagie/utils';

import { Route, Routes, Link } from 'react-router-dom';

import { DashboardDashboardFeatureTest } from '@de.bitmagie/dashboard/dashboard-feature-test';

export default function Example() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="TestTitle"/>
      <main className="flex-grow  px-2 sm:px-6 lg:px-8">
        <h1>{dashboardUtils()}</h1>
        <div className="border border-dashed border-gray-500 relative">
          <input
            type="file"
            multiple
            className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
          />
          <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
            <h4>
              Drop files anywhere to upload
              <br />
              or
            </h4>
            <p className="">Select Files</p>
          </div>
        </div>
      </main>
      <footer className="text-gray-600 body-font bg-slate-300 ">
        <div className="  mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 px-2 sm:px-6 lg:px-8">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
        </div>
      </footer>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard-feature-test">
              DashboardDashboardFeatureTest
            </Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/dashboard-feature-test"
          element={<DashboardDashboardFeatureTest />}
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}
