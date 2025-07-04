/*
 * @license
 * Copyright (c) 2025 Progressive Casualty Insurance Company. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT license that can be found at
 * https://opensource.progressive.com/resources/license
*/

export { OculrAngularModule } from './lib/oculr-ngx.module';

export { ClickDirective } from './lib/directives/click.directive';
export { ChangeDirective } from './lib/directives/change.directive';
export { DisplayDirective } from './lib/directives/display.directive';
export { FocusDirective } from './lib/directives/focus.directive';
export { TrackValidationDirective } from './lib/directives/track-validation.directive';

export { API_EVENT_CONTEXT } from './lib/interceptors/analytics.interceptor';

export { AnalyticEventType } from './lib/models/analytic-event-type.enum';
export { AnalyticEvent } from './lib/models/analytic-event.interface';
export { ApiContext } from './lib/models/api-context.interface';
export { ApiEventContext } from './lib/models/api-event-context.interface';
export { AppConfiguration } from './lib/models/app-configuration.interface';
export { DestinationConfig } from './lib/models/destination-config.interface';
export { Destinations } from './lib/models/destinations.enum';
export { DirectiveEvent } from './lib/models/directive-event.interface';
export { PageViewEvent } from './lib/models/page-view-event.interface';
export { AppEvent } from './lib/models/app-event.interface';
export { AppErrorEvent } from './lib/models/app-error-event.interface';
export { ValidationErrorEvent } from './lib/models/validation-error-event.interface';

export { AnalyticsEventBusService } from './lib/services/analytics-event-bus.service';
export { ConfigurationService } from './lib/services/configuration.service';
export { EventDispatchService } from './lib/services/event-dispatch.service';
export { PageViewTimingsService } from './lib/services/page-view-timings.service';
export { PageLoadPerformanceService } from './lib/services/page-load-performance.service';
