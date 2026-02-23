#!/usr/bin/env bash
set -euo pipefail

# Usage: set FTP_HOST, FTP_USER, FTP_PASS, REMOTE_DIR env vars then run ./upload.sh
:
${FTP_HOST:?FTP_HOST is required}
${FTP_USER:?FTP_USER is required}
${FTP_PASS:?FTP_PASS is required}
${REMOTE_DIR:?REMOTE_DIR is required}

if ! command -v lftp >/dev/null 2>&1; then
  echo "lftp is required. Install with: sudo apt-get install lftp"
  exit 1
fi

LOCAL_DIR="build"

if [ ! -d "$LOCAL_DIR" ]; then
  echo "Local build directory '$LOCAL_DIR' not found. Create it first (site_build.zip contains build/)."
  exit 1
fi

echo "Uploading $LOCAL_DIR to $FTP_HOST:$REMOTE_DIR ..."

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set ftp:ssl-allow no
mirror -R --delete --verbose --only-newer "$LOCAL_DIR" "$REMOTE_DIR"
quit
EOF

echo "Upload complete."
