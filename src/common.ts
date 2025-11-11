export enum ConnectionId {
  POPUP = "popup",
}

export enum PopupRequestType {
  LOGIN = "login",
  LOGOUT = "logout",
  STATUS = "status",
}

export interface PopupRequest {
  type: PopupRequestType;
}
