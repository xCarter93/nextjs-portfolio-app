"use client";

import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, Theme } from "ag-grid-community";
import { themeQuartz, colorSchemeDarkBlue } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
}

interface ICellRendererParams {
  data: Commit;
  value: string;
}

const customTheme = themeQuartz.withPart(colorSchemeDarkBlue).withParams({
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  headerFontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  cellFontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
});

interface GitHistoryProps {
  initialCommits: Commit[];
}

export function GitHistory({ initialCommits }: GitHistoryProps) {
  const columnDefs = useMemo<ColDef<Commit>[]>(
    () => [
      {
        field: "sha",
        headerName: "Commit Hash",
        width: 100,
        cellRenderer: (params: ICellRendererParams) => {
          return (
            <a
              href={params.data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              {params.value.substring(0, 7)}
            </a>
          );
        },
      },
      {
        field: "commit.author.name",
        headerName: "Author",
        width: 150,
      },
      {
        field: "commit.message",
        headerName: "Message",
        flex: 1,
      },
      {
        field: "commit.author.date",
        headerName: "Date",
        width: 200,
        cellRenderer: (params: ICellRendererParams) => {
          return new Date(params.value).toLocaleDateString();
        },
      },
    ],
    [],
  );

  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      filter: true,
    }),
    [],
  );

  const theme = useMemo<Theme>(() => customTheme, []);

  return (
    <div className="ag-theme-alpine-dark h-[600px] w-full">
      <AgGridReact
        rowData={initialCommits}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        theme={theme}
        pagination={true}
        paginationPageSize={10}
        domLayout="autoHeight"
      />
    </div>
  );
}
