
// // FORM / EVENT HANDLER (working)
// // const submitButton = document.querySelector("#submitUrlSearch")
// // console.log(submitButton)
// // let input ; // you can instantiate a variable and then assign it to a value in two different steps, example, instantiate variable outside the loop, and then variable++, where you instantiate variables matters (lexical scope)

// let userInput ;
// // submitButton.addEventListener('click', function(){
// //   userInput = document.querySelector("#user-input").value
// //   console.log(userInput)
// // });

// //need to pass the value of user input into a function that smashes the api credentials, the test url

// // if you want script tag in head, then put async defer, wait until dom is loaded, then run javascript

// const scoreCategory = ['SEO', 'Performance', "Accessibility", 'Best Practices']
const strategy = ['mobile', 'desktop']

// // tie in user input from event handler

// // async / await
// // fetches cls, fcp, and lcp from returned json object

function fetchResults (){
apiKey = 'AIzaSyAhHvOVjMtmYB-eC244vpWcc9lly3iKv-Y'
apiFetchUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?'
testUrl = 'https://blog.virtuwell.com/3-self-care-tips-for-mind-and-body'
const url = `${apiFetchUrl}url=${testUrl}&key=${apiKey}&strategy=${strategy[0]}&category=seo&category=accessibility&category=performance`
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // breadcrumb variables
    const lighthouse = data.lighthouseResult.categories;
    const experience = data.loadingExperience;

    // lighthouse scores
    const lighthouseMetrics = {
      'CLS': experience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category,
      'FCP': experience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
      'LCP': experience.metrics.LARGEST_CONTENTFUL_PAINT_MS.category
    };
    lighthouseResults(lighthouseMetrics)
    
    // core web vitals scores
    const cwvMetrics = {
      'Performance Score': lighthouse.performance.score,
      'SEO Score': lighthouse.seo.score,
      'Accessibility': lighthouse.accessibility.score,
    };
    

    console.log(cwvMetrics)
    console.log(lighthouseMetrics)

      function showPageContent(){
        document.body.innerHTML = '';
        const title = document.createElement('h1');
        title.textContent = 'PageSpeed Insights Scores';
        document.body.appendChild(title);
        const page = document.createElement('p');
        page.textContent = `Page tested: ${testUrl}`;
        document.body.appendChild(page);
      };
      showPageContent()

      function cwvScores (metrics){
        const metricHeader = document.createElement('h2');
        metricHeader.textContent = "Core Web Vitals Report Scores";
        document.body.appendChild(metricHeader);
          for (key in metrics) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${metrics[key]}`;
            document.body.appendChild(p);
          };
        };
        cwvScores()
        
        function lighthouseResults(lighthouseMetrics){
          const lighthouseHeader = document.createElement('h2');
          lighthouseHeader.textContent = "Lighthouse Results";
          document.body.appendChild(lighthouseHeader);
          for (key in lighthouseMetrics) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${lighthouseMetrics[key]}`;
            document.body.appendChild(p);
          }
       }
      showPageContent(testUrl)
      lighthouseResults()

  });
};

  fetchResults()

      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   // want to add some css / color coding to scores based upon the ranges google says is good or not or maybe use giphy to return a handselected gif or random gif, fast, slow, average
//       // slow: https://giphy.com/gifs/abcnetwork-angry-upset-bMdZu3fG2ZEBO
//       // average: https://giphy.com/gifs/youtube-mental-health-withme-get-by-Tdp2QlrGJVsz1TRY1h
//       // fast: https://giphy.com/gifs/cbc-schitts-creek-moira-1wpt0Aef5EdGyczbLk 

//     //need to add these elements to the by create element stuff
// fetchResults();





// function run() {
//   const url = setUpQuery();
//   fetch(url)
//     .then(response => response.json())
//     .then(json => {
//       // See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response
//       // to learn more about each of the properties in the response object.
//       showInitialContent(json.id);
//       const cruxMetrics = {
//         "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
//         "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
//       };
//       showCruxContent(cruxMetrics);
//       const lighthouse = json.lighthouseResult;
//       const lighthouseMetrics = {
//         'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
//         'Speed Index': lighthouse.audits['speed-index'].displayValue,
//         'Time To Interactive': lighthouse.audits['interactive'].displayValue,
//         'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
//         'First CPU Idle': lighthouse.audits['first-cpu-idle'].displayValue,
//         'Estimated Input Latency': lighthouse.audits['estimated-input-latency'].displayValue
//       };
//       showLighthouseContent(lighthouseMetrics);
//     });
// }

// function setUpQuery() {
//   const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
//   const parameters = {
//     url: encodeURIComponent('https://developers.google.com')
//   };
//   let query = `${api}?`;
//   for (key in parameters) {
//     query += `${key}=${parameters[key]}`;
//   }
//   return query;
// }

// function showInitialContent(id) {
//   document.body.innerHTML = '';
//   const title = document.createElement('h1');
//   title.textContent = 'PageSpeed Insights API Demo';
//   document.body.appendChild(title);
//   const page = document.createElement('p');
//   page.textContent = `Page tested: ${id}`;
//   document.body.appendChild(page);
// }

// function showCruxContent(cruxMetrics) {
//   const cruxHeader = document.createElement('h2');
//   cruxHeader.textContent = "Chrome User Experience Report Results";
//   document.body.appendChild(cruxHeader);
//   for (key in cruxMetrics) {
//     const p = document.createElement('p');
//     p.textContent = `${key}: ${cruxMetrics[key]}`;
//     document.body.appendChild(p);
//   }
// }

// function showLighthouseContent(lighthouseMetrics) {
//   const lighthouseHeader = document.createElement('h2');
//   lighthouseHeader.textContent = "Lighthouse Results";
//   document.body.appendChild(lighthouseHeader);
//   for (key in lighthouseMetrics) {
//     const p = document.createElement('p');
//     p.textContent = `${key}: ${lighthouseMetrics[key]}`;
//     document.body.appendChild(p);
//   }
// }

// run();
