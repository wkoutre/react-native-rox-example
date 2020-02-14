# Rollout Demo

This serves to replicate the crash presented by the `rox-react-native@>=4.8.2` library for, at the very, iOS release builds.

## Replication

The `Run` command in iOS is set towards the `Release` Build Configuration.

- run `yarn install && yarn postinstall` (should be run automatically, but just in case)
- `open ios/RolloutTest.xcworkspace/`
- Select a simulator and press `Cmd + R` or the play button to build and run a `Release` build

At this point, you should notive in the XCode console a log similar to:

```
2020-02-13 19:37:15.389 [error][tid:com.facebook.react.JavaScript] TypeError: this.methodFactory is not a function. (In 'this.methodFactory(o,t,n)', 'this.methodFactory' is undefined)
2020-02-13 19:37:15.393 [fatal][tid:com.facebook.react.ExceptionsManagerQueue] Unhandled JS Exception: TypeError: this.methodFactory is not a function. (In 'this.methodFactory(o,t,n)', 'this.methodFactory' is undefined)
2020-02-13 19:37:15.394 [error][tid:com.facebook.react.JavaScript] Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication)
2020-02-13 19:37:15.398395-0800 RolloutTest[32437:5670227] *** Terminating app due to uncaught exception 'RCTFatalException: Unhandled JS Exception: TypeError: this.methodFactory is not a function. (In 'this.methodFactory(o,t,n)', 'this.methodFactory' is undefined)', reason: 'Unhandled JS Exception: TypeError: this.methodFactory is not a function. (In 'this.methodFactory(o,t,n)', 'this.methodFactory' is undefined), stack:
n@397:171724
<unknown>@397:172723
i@397:173062
n@397:173080
<unknown>@397:173531
r@397:68034
<unknown>@397:72456
r@397:68034
<unknown>@397:170567
r@397:68034
<unknown>@397:97014
r@397:68034
<unknown>@397:169890
r@397:68034
s@397:68389
<unknown>@397:265929
<unknown>@397:266012
r@397:414
<unknown>@397:363219
r@397:414
<unknown>@397:361163
r@397:414
<unknown>@397:360397
r@397:414
<unknown>@397:759
factory@397:769
<unknown>@397:508709
v@2:1474
<unknown>@393:148
v@2:1474
<unknown>@392:85
v@2:1474
<unknown>@382:238
v@2:1474
<unknown>@6:58
v@2:1474
d@2:876
global code@401:4
'
*** First throw call stack:
(
 0   CoreFoundation                      0x00007fff23c7127e __exceptionPreprocess + 350
 1   libobjc.A.dylib                     0x00007fff513fbb20 objc_exception_throw + 48
 2   RolloutTest                         0x0000000105babd8b RCTFormatError + 0
 3   RolloutTest                         0x0000000105c217b1 -[RCTExceptionsManager reportFatalException:stack:exceptionId:] + 508
 4   CoreFoundation                      0x00007fff23c7820c __invoking___ + 140
 5   CoreFoundation                      0x00007fff23c753af -[NSInvocation invoke] + 319
 6   CoreFoundation                      0x00007fff23c75684 -[NSInvocation invokeWithTarget:] + 68
 7   RolloutTest                         0x0000000105bdfc70 -[RCTModuleMethod invokeWithBridge:module:arguments:] + 578
 8   RolloutTest                         0x0000000105be1f1e _ZN8facebook5reactL11invokeInnerEP9RCTBridgeP13RCTModuleDatajRKN5folly7dynamicE + 246
 9   RolloutTest                         0x0000000105be1ca6 ___ZN8facebook5react15RCTNativeModule6invokeEjON5folly7dynamicEi_block_invoke + 78
 10  libdispatch.dylib                   0x00007fff5223e848 _dispatch_call_block_and_release + 12
 11  libdispatch.dylib                   0x00007fff5223f7b9 _dispatch_client_callout + 8
 12  libdispatch.dylib                   0x00007fff52245526 _dispatch_lane_serial_drain + 707
 13  libdispatch.dylib                   0x00007fff52245f5c _dispatch_lane_invoke + 388
 14  libdispatch.dylib                   0x00007fff5224fff9 _dispatch_workloop_worker_thread + 626
 15  libsystem_pthread.dylib             0x00007fff524636fc _pthread_wqthread + 290
 16  libsystem_pthread.dylib             0x00007fff52462827 start_wqthread + 15
)
libc++abi.dylib: terminating with uncaught exception of type NSException

```
