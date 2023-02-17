# cypress tell me 

```bash
====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  example.cy.js                            243ms        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     243ms        1        -        1        -        -  

[baizhi958216@TianXuan section-20-18]$ pnpm cypress run --e2e

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.3.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v19.6.0 (/usr/bin/node)                                                        │
  │ Specs:          1 found (example.cy.js)                                                        │
  │ Searched:       cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  example.cy.js                                                                   (1 of 1)


  Sanity Test
    1) visits the app root url


  0 passing (230ms)
  1 failing

  1) Sanity Test
       visits the app root url:
     CypressError: `cy.visit()` failed trying to load:

http://localhost:4173/

The response we received from your web server was:

  > 404: Not Found

This was considered a failure because the status code was not `2xx`.

If you do not want status codes to cause failures pass the option: `failOnStatusCode: false`
      at <unknown> (http://localhost:4173/__cypress/runner/cypress_runner.js:138152:84)
      at visitFailedByErr (http://localhost:4173/__cypress/runner/cypress_runner.js:137560:12)
      at <unknown> (http://localhost:4173/__cypress/runner/cypress_runner.js:138135:13)
      at tryCatcher (http://localhost:4173/__cypress/runner/cypress_runner.js:8914:23)
      at Promise._settlePromiseFromHandler (http://localhost:4173/__cypress/runner/cypress_runner.js:6849:31)
      at Promise._settlePromise (http://localhost:4173/__cypress/runner/cypress_runner.js:6906:18)
      at Promise._settlePromise0 (http://localhost:4173/__cypress/runner/cypress_runner.js:6951:10)
      at Promise._settlePromises (http://localhost:4173/__cypress/runner/cypress_runner.js:7027:18)
      at _drainQueueStep (http://localhost:4173/__cypress/runner/cypress_runner.js:3621:12)
      at _drainQueue (http://localhost:4173/__cypress/runner/cypress_runner.js:3614:9)
      at ../../node_modules/bluebird/js/release/async.js.Async._drainQueues (http://localhost:4173/__cypress/runner/cypress_runner.js:3630:5)
      at Async.drainQueues (http://localhost:4173/__cypress/runner/cypress_runner.js:3500:14)
  From Your Spec Code:
      at Context.eval (webpack:///./cypress/e2e/example.cy.js:5:7)




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     example.cy.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /run/media/baizhi958216/新加卷/Users/Cyan/DEV/2023vuedeveloper/section-20-18/cy…     (1280x720)
     s/screenshots/example.cy.js/Sanity Test -- visits the app root url (failed).png                


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /run/media/baizhi958216/新加卷/Users/Cyan/DEV/2023vuedevel…    (0 seconds)
                          /section-20-18/cypress/videos/example.cy.js.mp4                           


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  example.cy.js                            223ms        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     223ms        1        -        1        -        -  
```