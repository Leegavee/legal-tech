
startsNewCaseHistorySession() : Promise<CaseHistorySession>

postMessage(message: Message, caseHistorySession: CaseHistorySession) : Promise<PostMessageResponse | PostMessageError>

displayResponse(postMessageResponse): void

Given a Client logs in
If the Client has an active Case 
Then the Client is redirected to the Case Session
Else the Client is redirected to the New Case Session

    
