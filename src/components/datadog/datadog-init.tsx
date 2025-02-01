'use client'

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: process.env.DATADOG_APPLICATION_ID!,
    clientToken: process.env.DATADOG_CLIENT_TOKEN!,
    site: 'datadoghq.com',
    service: 'vscode-portfolio',
    env: 'prod',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    defaultPrivacyLevel: 'mask-user-input',
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
});

export default function DatadogInit() {
    return null;
}