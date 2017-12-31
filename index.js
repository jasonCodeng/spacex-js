"use strict";
/* global fetch */

const baseUrl = "https://api.spacexdata.com/v2";
let app;

function fetchJSON(url) {
  return fetch(url)
    .then(res => res.json())
    .then(body => {
      if (body.Response === "Error") throw body.Message;
      return body;
    });
}

//////////////////
// COMPANY INFO //
//////////////////

app.info = () => {
  let url = `${baseUrl}/info`;
  return fetchJSON(url);
};

/////////////////
// ROCKET INFO //
/////////////////

app.rockets = name => {
  let url = name ? `rockets/${name}` : `rockets/`;
  return fetchJSON(`${baseUrl}/${url}`);
};

//////////////////
// CAPSULE INFO //
//////////////////

app.capsules = name => {
  let url = name ? `capsules/${name}` : `capsules/`;
  return fetchJSON(`${baseUrl}/${url}`);
};

////////////////////
// LAUNCHPAD INFO //
////////////////////

app.capsules = name => {
  let url = name ? `launchpads/${name}` : `launchpads/`;
  return fetchJSON(`${baseUrl}/${url}`);
};

/////////////////
// LAUNCH INFO //
/////////////////

app.launches = {
  latest: () => {
    return fetchJSON(`${baseUrl}/launches/latest/`);
  },
  past: options => {
    if (!options) {
      return fetchJSON(`${baseUrl}/launches/`);
    } else {
      let url = `${baseUrl}/launches/?`;
      let filterOptions = this.filter(options);
      return fetchJSON(`${url}/${filterOptions}/`);
    }
  },
  upcoming: options => {
    if (!options) {
      return fetchJSON(`${baseUrl}/launches/upcoming/`);
    } else {
      let url = `${baseUrl}/launches/upcoming?`;
      let filterOptions = this.filter(options);
      return fetchJSON(`${url}/${filterOptions}/`);
    }
  },
  filter: options => {
    let url = "";
    if (options.order) url += `&order=${options.order}`;
    if (options.flight_number) url += `&flight_number=${options.flight_number}`;
    if (options.launch_year) url += `&launch_year=${options.launch_year}`;
    if (options.launch_date_utc)
      url += `&launch_date_utc=${options.launch_date_utc}`;
    if (options.launch_date_local)
      url += `&launch_date_local=${options.launch_date_local}`;
    if (options.rocket_id) url += `&rocket_id=${options.rocket_id}`;
    if (options.rocket_name) url += `&rocket_name=${options.rocket_name}`;
    if (options.rocket_type) url += `&rocket_type=${options.rocket_type}`;
    if (options.core_serial) url += `&core_serial=${options.core_serial}`;
    if (options.cap_serial) url += `&cap_serial=${options.cap_serial}`;
    if (options.side_core1_reuse)
      url += `&side_core1_reuse=${options.side_core1_reuse}`;
    if (options.side_core2_reuse)
      url += `&side_core2_reuse=${options.side_core2_reuse}`;
    if (options.fairings_reuse)
      url += `&fairings_reuse=${options.fairings_reuse}`;
    if (options.capsule_reuse) url += `&capsule_reuse=${options.capsule_reuse}`;
    if (options.site_id) url += `&site_id=${options.site_id}`;
    if (options.site_name) url += `&site_name=${options.site_name}`;
    if (options.site_name_long)
      url += `&site_name_long=${options.site_name_long}`;
    if (options.payload_id) url += `&payload_id=${options.payload_id}`;
    if (options.customer) url += `&customer=${options.customer}`;
    if (options.payload_type) url += `&payload_type=${options.payload_type}`;
    if (options.orbit) url += `&orbit=${options.orbit}`;
    if (options.launch_success)
      url += `&launch_success=${options.launch_success}`;
    if (options.reused) url += `&reused=${options.reused}`;
    if (options.land_success) url += `&land_success=${options.land_success}`;
    if (options.landing_type) url += `&landing_type=${options.landing_type}`;
    if (options.landing_vehicle)
      url += `&payload_type=${options.landing_vehicle}`;
    return url;
  }
};


////////////////////
// CAPSULE DETAIL //
////////////////////

app.launches = {
  latest: () => {
    return fetchJSON(`${baseUrl}/launches/latest/`);
  },
  past: options => {
    if (!options) {
      return fetchJSON(`${baseUrl}/launches/`);
    } else {
      let url = `${baseUrl}/launches/?`;
      let filterOptions = this.filter(options);
      return fetchJSON(`${url}/${filterOptions}/`);
    }
  },
  upcoming: options => {
    if (!options) {
      return fetchJSON(`${baseUrl}/launches/upcoming/`);
    } else {
      let url = `${baseUrl}/launches/upcoming?`;
      let filterOptions = this.filter(options);
      return fetchJSON(`${url}/${filterOptions}/`);
    }
  },
  filter: options => {
    let url = "";
    if (options.order) url += `&order=${options.order}`;
    if (options.flight_number) url += `&flight_number=${options.flight_number}`;
    if (options.launch_year) url += `&launch_year=${options.launch_year}`;
    if (options.launch_date_utc)
      url += `&launch_date_utc=${options.launch_date_utc}`;
    if (options.launch_date_local)
      url += `&launch_date_local=${options.launch_date_local}`;
    if (options.rocket_id) url += `&rocket_id=${options.rocket_id}`;
    if (options.rocket_name) url += `&rocket_name=${options.rocket_name}`;
    if (options.rocket_type) url += `&rocket_type=${options.rocket_type}`;
    if (options.core_serial) url += `&core_serial=${options.core_serial}`;
    if (options.cap_serial) url += `&cap_serial=${options.cap_serial}`;
    if (options.side_core1_reuse)
      url += `&side_core1_reuse=${options.side_core1_reuse}`;
    if (options.side_core2_reuse)
      url += `&side_core2_reuse=${options.side_core2_reuse}`;
    if (options.fairings_reuse)
      url += `&fairings_reuse=${options.fairings_reuse}`;
    if (options.capsule_reuse) url += `&capsule_reuse=${options.capsule_reuse}`;
    if (options.site_id) url += `&site_id=${options.site_id}`;
    if (options.site_name) url += `&site_name=${options.site_name}`;
    if (options.site_name_long)
      url += `&site_name_long=${options.site_name_long}`;
    if (options.payload_id) url += `&payload_id=${options.payload_id}`;
    if (options.customer) url += `&customer=${options.customer}`;
    if (options.payload_type) url += `&payload_type=${options.payload_type}`;
    if (options.orbit) url += `&orbit=${options.orbit}`;
    if (options.launch_success)
      url += `&launch_success=${options.launch_success}`;
    if (options.reused) url += `&reused=${options.reused}`;
    if (options.land_success) url += `&land_success=${options.land_success}`;
    if (options.landing_type) url += `&landing_type=${options.landing_type}`;
    if (options.landing_vehicle)
      url += `&payload_type=${options.landing_vehicle}`;
    return url;
  }
};


module.exports = app;
