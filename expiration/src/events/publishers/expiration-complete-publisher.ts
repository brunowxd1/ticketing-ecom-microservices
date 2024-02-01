import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from "@bjftickets/commom";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
  
}
