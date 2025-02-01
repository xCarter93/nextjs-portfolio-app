'use client'

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'c1ba61ee-6d92-4be5-bffc-d6296912e73a',
    clientToken: 'pub3200e02e9dba0c5fd1babb0aaddfc657',
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