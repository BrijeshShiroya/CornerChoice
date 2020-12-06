//
//  DeviceTypeChecker.m
//  SightSpecDemo
//
//  Created by Brijesh Shiroya on 06/12/20.
//

#import "DeviceTypeCheckerModule.h"

@implementation DeviceTypeCheckerModule

RCT_EXPORT_MODULE(DeviceTypeCheckerModule);

- (NSDictionary *)constantsToExport {
    return @{
         @"isSimulator": @([self isSimulator])
      };
}

- (BOOL)isSimulator {
    BOOL isSimulator = NO;
    #if TARGET_IPHONE_SIMULATOR
      isSimulator = YES;
    #endif
    return isSimulator;
  }
  


@end
