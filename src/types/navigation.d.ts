// src/types/navigation.d.ts

// Root stack screens
export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  MainTabs: undefined;
  DebugDatabase: undefined; 
};


export type TabParamList = {
  ClassTab: undefined;
  ExamTab: undefined;
  ResultTab: undefined;
  ScannerTab: undefined;
  SettingTab: undefined;
  StudentTab: undefined;
  SyncTab: undefined;
};


// Class stack screens
export type ClassStackParamList = {
  Class: undefined;
  ClassDetail: { classId: string };
  CreateClass: undefined;
};

// Exam stack screens
export type ExamStackParamList = {
  Exam: undefined;
  AnswerKey:  {examId: string};
  CreateExam: undefined;
};

// Student stack screens
export type StudentStackParamList = {
  Student: undefined;
  StudentDetail: {studentId : string};
  CreateStudent: undefined;
};

// Result stack screens
export type ResultStackParamList = {
  ResultList: undefined;
  ResultDetail: undefined;
};

// Sync stack screens
export type SyncStackParamList = {
  SyncScreen: undefined;
};

// Settings stack screens
export type SettingStackParamList = {
  SettingScreen: undefined;
};

// Scanner Stack screen
export type ScannerStackParamList = {
  Scanner: undefined;
  CameraView: undefined;
  ReviewScan: { uri: string };
};
