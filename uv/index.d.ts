/**
 * LibUV bindings exposed to JavaScript in a mostly 1-1 manner.
 * 
 * See http://docs.libuv.org/en/v1.x/
 */
declare module "uv" {

  type Address = {
    ip: string,
    port: number,
    family?: string
  }

  type StatEntry = {
    mode: number,
    uid: number,
    gid: number,
    size: number,
    type: "file" | "dir" | "link" | "fifo" | "socket" | "char" | "block"
  };

  /**
   * Wrapper for `uv_req_t` request base type. See http://docs.libuv.org/en/v1.x/request.html
   */
  abstract class Req {
    /**
     * Cancel a pending request. Fails if the request is executing or has finished executing.
     * 
     * Wrapper for `uv_cancel` request method.
     */
    cancel(): void
  }

  /**
   * Wrapper for `uv_connect_t` request type. See http://docs.libuv.org/en/v1.x/stream.html#c.uv_connect_t
   */
  class Connect extends Req { }

  /**
   * Wrapper for `uv_shutdown_t` request type. See http://docs.libuv.org/en/v1.x/stream.html#c.uv_shutdown_t
   */
  class Shutdown extends Req { }

  /**
   * Wrapper for `uv_write_t` request type. See http://docs.libuv.org/en/v1.x/stream.html#c.uv_write_t
   */
  class Write extends Req { }

  /**
   * Wrapper for `uv_udp_send_t` request type. See http://docs.libuv.org/en/v1.x/udp.html#c.uv_udp_send_t
   */
  class UdpSend extends Req { }

  /**
   * Wrapper for `uv_fs_t` request type. See http://docs.libuv.org/en/v1.x/fs.html#c.uv_fs_t
   */
  class Fs extends Req { }

  /**
   * Wrapper for `uv_getaddrinfo_t` request type. See http://docs.libuv.org/en/v1.x/dns.html#c.uv_getaddrinfo_t
   */
  class Getaddrinfo extends Req { }

  /**
   * Wrapper for `uv_handle_t` handle base type. See http://docs.libuv.org/en/v1.x/handle.html
   */
  abstract class Handle {
    /**
     * Request handle to be closed.
     *
     * Wrapper for `uv_close`.
     */
    close(onClose?: () => void): void

    /**
     * Reference the handle.
     *
     * Wrapper for `uv_ref`.
     */
    ref(): void

    /**
     * Un-reference the handle.
     *
     * Wrapper for `uv_unref`.
     */
    unref(): void

    /**
     * Returns `true` if the handle referenced, `false` otherwise.
     *
     * Wrapper for `uv_has_ref`.
     */
    hasRef(): boolean
  }

  /**
   * Timer handles are used to schedule callbacks to be called in the future.
   *
   * Wrapper for `uv_timer_t`. See http://docs.libuv.org/en/v1.x/timer.html
   */
  class Timer extends Handle {
    /**
     * Create and initialize a new wrapped `uv_timer_t` handle.
     */
    constructor()

    /**
     * Start the timer. timeout and repeat are in milliseconds.
     *
     * If timeout is zero, the callback fires on the next event loop iteration. If repeat is non-zero, the callback fires first after timeout milliseconds and then repeatedly after repeat milliseconds.
     *
     * Wrapper for `uv_timer_start`.
     */
    start(onTimeout: () => void, timeout: number, repeat: number): void

    /**
     * Stop the timer, the callback will not be called anymore.
     *
     * Wrapper for `uv_timer_stop`.
     */
    stop(): void

    /**
     * Stop the timer, and if it is repeating restart it using the repeat value as the timeout. If the timer has never been started before it throws UV_EINVAL.
     *
     * Wrapper for `uv_timer_again`.
     */
    again(): void

    /**
     * Get or set the repeat value in milliseconds. The timer will be scheduled to run on the given interval, regardless of the callback execution duration, and will follow normal timer semantics in the case of a time-slice overrun.
     *
     * Wrapper for `uv_timer_set_repeat` and `uv_timer_get_repeat` exposed as a writable JS property.
     */
    repeat: number
  }

  /**
   * Check handles will run the given callback once per loop iteration, right after polling for i/o.
   *
   * Wrapper for `uv_check_t`.
   * See http://docs.libuv.org/en/v1.x/check.html
   */
  class Check extends Handle {
    /**
     * Create and initialize a new wrapped `uv_check_t` handle.
     */
    constructor()

    /**
     * Check handles will run the given callback once per loop iteration, right after polling for i/o.
     *
     * Wrapper for `uv_check_start`.
     */
    start(onCheck: () => void): void

    /**
     * Stop the handle, the callback will no longer be called.
     *
     * Wrapper for `uv_check_stop`.
     */
    stop(): void
  }

  /**
   * Wrapper for `uv_stream_t` handle base type. See http://docs.libuv.org/en/v1.x/stream.html
   */
  abstract class Stream extends Handle {
    /**
     * Shutdown the outgoing (write) side of a duplex stream.
     * 
     * Wraps `uv_shutdown`.
     */
    shutdown(req: Shutdown, onShutdown: (error: Error) => void): void

    /**
     * Start listening for incoming connections.
     * 
     * ```js
     * server.listen(backlog, (error) => {
     *   ...
     *   const client = new Tcp();
     *   server.accept(client)
     *   ...
     * });
     * ```
     * 
     * Wraps `uv_listen`.
     * @param backlog indicates the number of connections the kernel might queue.
     * @param onConnection is called when a new incoming connection is received.
     */
    listen(backlog: number, onConnection: (error: Error) => void): void

    /**
     * This call is used in conjunction with [Stream.listen](#Stream.listen) to accept incoming connections.
     * Call this function after receiving a connection callback to accept the connection.
     * 
     * Wraps `uv_accept`.
     */
    accept(client: Stream): void

    /**
     * Read data from an incoming stream.
     * @param onRead will be called several times until there is no more data to read or [Stream.readStop](#Stream.readStop) is called.
     * 
     * Wraps `uv_read_start`.
     */
    readStart(onRead: (error: Error, data?: ArrayBuffer) => void): void

    /**
     * Stop reading data from the stream. The [Stream.readStart](#Stream.readStart) callback will no longer be called.
     * 
     * Wraps `uv_read_stop`.
     */
    readStop(): void

    /**
     * Write data to stream. Buffers are written in order.
     * 
     * ```js
     * stream.write(new Write(), data, (error) => {
     *   print('The data was written...');
     * });
     * ```
     * 
     * Wraps `uv_write`.
     */
    write(req: Write, data: ArrayBufferView | ArrayBuffer, onWrite: (error: Error) => void): void
  }

  /**
   * TCP handles are used to represent both TCP streams and servers.
   *
   * Wrapper for `uv_tcp_t`. See http://docs.libuv.org/en/v1.x/tcp.html
   */
  class Tcp extends Stream {

    /**
     * Create and initialize a new wrapped `uv_tcp_t` handle.
     */
    constructor()

    /**
     * Bind the handle to an address and port.
     * 
     * Wraps `uv_tcp_bind`.
     */
    bind(ip: string, port: number): void

    /**
     * Establish an IPv4 or IPv6 TCP connection.
     * 
     * Wraps `uv_tcp_connect`.
     */
    connect(req: Connect, ip: string, port: number, onConnect: (error: Error) => void): void

    /**
     * Readable property exposing the current address to which the handle is bound
     * 
     * Wraps `uv_tcp_getsockname`.
     */
    sockname: Address

    /**
     * Readable property exposing the address of the peer connected to the handle.
     * 
     * Wraps `uv_tcp_getpeername`.
     */
    peername: Address
  }


  export const UDP_REUSEADDR: number
  export const UDP_IPV6ONLY: number
  export const LEAVE_GROUP: number
  export const JOIN_GROUP: number
  export const UDP_PARTIAL: number

  /**
   * UDP handles encapsulate UDP communication for both clients and servers.
   *
   * Wrapper for `uv_udp_t`. See http://docs.libuv.org/en/v1.x/udp.html
   */
  class Udp extends Handle {
    /**
     * Create and initialize a new wrapped `uv_udp_t` handle.
     */
    constructor()

    /** Opens an existing file descriptor or Windows SOCKET as a UDP handle. */
    open(sock: number): void

    /** Bind the UDP handle to an IP address and port. */
    bind(host: string, port: number, flags: number): void

    /**
     * Associate the UDP handle to a remote address and port, so every message 
     * sent by this handle is automatically sent to that destination.
     */
    connect(host: string, port: number): void

    /** Get the remote IP and port of the UDP handle on connected UDP handles */
    getPeername(): Address

    /** Get the local IP and port of the UDP handle. */
    getSockname(): Address

    /** Set membership for a multicast address */
    setMembership(multicastAddress: string, interfaceAddress: string, membership: number): void

    /** 
     * Set IP multicast loop flag. Makes multicast packets loop back to local 
     * sockets. 
     * */
    setMulticastLoop(on: number): void

    /** Set the multicast ttl. */
    setMulticastTtl(ttl: number): void

    /** Set the multicast interface to send or receive data on. */
    setMulticastInterface(interfaceAddress: string): void

    /** Set broadcast on or off. */
    setBroadcast(on: number): void

    /** Set the time to live. */
    setTtl(ttl: number): void

    /**
     * Send data over the UDP socket.
     * 
     * If the socket has not previously been bound with [Udp.bind](#Udp.bind) 
     * it will be bound to `0.0.0.0` and a random port number.
     */
    send(req: UdpSend, buffer: ArrayBufferView | ArrayBuffer, host: string, port: number, onSend: (error: Error) => void): UdpSend
    /** Omit `host` and `port` for connected UDP handles. */
    send(req: UdpSend, buffer: ArrayBufferView | ArrayBuffer, onSend: (error: Error) => void): UdpSend

    /**
     * Same as [Udp.send](#Udp.send), but won’t queue a send request if it 
     * can’t be completed immediately.
     */
    trySend(buffer: ArrayBufferView | ArrayBuffer, host: string, port: number): number
    /** Omit `host` and `port` for connected UDP handles. */
    trySend(buffer: ArrayBufferView | ArrayBuffer): number

    /**
     * Prepare for receiving data. 
     * 
     * If the socket has not previously been bound with [Udp.bind](#Udp.bind) 
     * it will be bound to `0.0.0.0` and a random port number.
     */
    recvStart(onRecv: (error: Error, data: ArrayBuffer, address: Address, flags: number) => void): void

    /** Stop listening for incoming datagrams. */
    recvStop(): void

    getSendQueueSize(): number
    getSendQueueCount(): number
  }

  /** 
   * flags can be raw numerical constants ORed together or use string aliases.  
   * - `r` is `UV_FS_O_RDONLY`
   * - `w` is `UV_FS_O_TRUNC | UV_FS_O_CREAT | UV_FS_O_WRONLY`
   * - `a` is `UV_FS_O_APPEND | UV_FS_O_CREAT | UV_FS_O_WRONLY`
   * - Adding `+` uses `UV_FS_O_RDWR` instead of `UV_FS_O_RDONLY` or `UV_FS_O_WRONLY`.
   * - Adding `s` adds `UV_FS_O_SYNC`
   * - Adding `x` adds `UV_FS_O_EXCL`
  */
  type Flags = number
    | "r" | "r+"
    | "w" | "w+"
    | "a" | "a+"
    | "rs" | "rs+" | "sr" | "sr+"
    | "wx" | "wx+" | "xw" | "xw+"
    | "ax" | "ax+" | "xa" | "xa+"

  /**
   * Bindings for libuv file system operations.
   * See http://docs.libuv.org/en/v1.x/fs.html
   */
  namespace fs {
    /** Non-blocking file open */
    function open(req: Fs, path: string, flags: Flags, mode: number, onOpen: (error: Error, fd: number) => void): Fs
    /** Blocking file open */
    function open(req: Fs, path: string, flags: Flags, mode: number): number
    /** Non-blocking file close */
    function close(req: Fs, fd: number, onClose: (error: Error) => void): Fs
    /** Blocking file close */
    function close(req: Fs, fd: number): void
    /** Non-blocking file read */
    function read(req: Fs, fd: number, buffer: ArrayBufferView | ArrayBuffer, position: number, onRead: (error: Error, bytesRead: number) => void): Fs
    /** Blocking file read */
    function read(req: Fs, fd: number, buffer: ArrayBufferView | ArrayBuffer, position: number): number
    /** Non-blocking file write */
    function write(req: Fs, fd: number, buffer: ArrayBufferView | ArrayBuffer, position: number, onWrite: (error: Error, bytesWritten: number) => void): Fs
    /** Blocking file write */
    function write(req: Fs, fd: number, buffer: ArrayBufferView | ArrayBuffer, position: number): number
    /** Non-blocking file unlink */
    function unlink(req: Fs, path: string, onUnlink: (error: Error) => void): Fs
    /** Blocking file unlink */
    function unlink(req: Fs, path: string): void
    /** Non-blocking mkdir */
    function mkdir(req: Fs, path: string, mode: number, onMkdir: (error: Error) => void): Fs
    /** Blocking mkdir */
    function mkdir(req: Fs, path: string, mode: number): void
    /** Non-blocking mkdtemp */
    function mkdtemp(req: Fs, template: string, onMkdtemp: (error: Error, path: string) => void): Fs
    /** Blocking mkdtemp */
    function mkdtemp(req: Fs, template: string): string
    /** Non-blocking rmdir */
    function rmdir(req: Fs, path: string, onRmdir: (error: Error) => void): Fs
    /** Blocking rmdir */
    function rmdir(req: Fs, path: string): void
    /** Non-blocking scandir */
    function scandir(req: Fs, path: string, flags: number, onScandir: (error: Error, req: Fs) => void): Fs
    /** Blocking scandir */
    function scandir(req: Fs, path: string, flags: number): Fs
    /** Get next entry in scandir result */
    function scandirNext(req: Fs): { name: string, type: string } | undefined
    /** Non-blocking file path stat query */
    function stat(req: Fs, path: string, onStat: (error: Error, stat: StatEntry) => void): Fs
    /** Blocking file path stat query */
    function stat(req: Fs, path: string): StatEntry
    /** Non-blocking file descriptor stat query */
    function fstat(req: Fs, fd: number, onStat: (error: Error, stat: StatEntry) => void): Fs
    /** Blocking file descriptor stat query */
    function fstat(req: Fs, fd: number): StatEntry
    /** Non-blocking file path lstat query */
    function lstat(req: Fs, path: string, onStat: (error: Error, stat: StatEntry) => void): Fs
    /** Blocking file path lstat query */
    function lstat(req: Fs, path: string): StatEntry
    /** Non-blocking file path rename */
    function rename(req: Fs, path: string, newPath: string, onRename: (error: Error) => void): Fs
    /** Blocking file path rename */
    function rename(req: Fs, path: string, newPath: string): void
    /** Non-blocking fsync */
    function fsync(req: Fs, fd: number, onSync: (error: Error) => void): Fs
    /** Blocking fsync */
    function fsync(req: Fs, fd: number): void
    /** Non-blocking fdatasync */
    function fdatasync(req: Fs, fd: number, onSync: (error: Error) => void): Fs
    /** Blocking fdatasync */
    function fdatasync(req: Fs, fd: number): void
    /** Non-blocking truncate */
    function ftruncate(req: Fs, fd: number, onTruncate: (error: Error) => void): Fs
    /** Blocking truncate */
    function ftruncate(req: Fs, fd: number): void
    /** Non-blocking copyfile */
    function copyfile(req: Fs, path: string, newPath: string, flags: number, onCopy: (error: Error) => void): Fs
    /** Blocking copyfile */
    function copyfile(req: Fs, path: string, newPath: string, flags: number): void
    /** Non-blocking sendfile */
    function sendfile(req: Fs, outFd: number, inFd: number, offset: number, length: number, onSend: (error: Error, bytesSent: number) => void): Fs
    /** Blocking sendfile */
    function sendfile(req: Fs, outFd: number, inFd: number, offset: number, length: number): number
    /** Non-blocking access */
    function access(req: Fs, path: string, mode: number, callback: (error: Error, access: number) => void): Fs
    /** Blocking access */
    function access(req: Fs, path: string, mode: number): number
    /** Non-blocking chmod */
    function chmod(req: Fs, path: string, mode: number, callback: (error: Error) => void): Fs
    /** Blocking chmod */
    function chmod(req: Fs, path: string, mode: number): void
    /** Non-blocking fchmod */
    function fchmod(req: Fs, fd: number, mode: number, callback: (error: Error) => void): Fs
    /** Blocking fchmod */
    function fchmod(req: Fs, fd: number, mode: number): void
    /** Non-blocking utime */
    function utime(req: Fs, path: string, atime: number, mtime: number, callback: (error: Error) => void): Fs
    /** Blocking utime */
    function utime(req: Fs, path: string, atime: number, mtime: number): void
    /** Non-blocking futime */
    function futime(req: Fs, fd: number, atime: number, mtime: number, callback: (error: Error) => void): Fs
    /** Blocking futime */
    function futime(req: Fs, fd: number, atime: number, mtime: number): void
    /** Non-blocking link */
    function link(req: Fs, path: string, newPath: string, callback: (error: Error) => void): Fs
    /** Blocking link */
    function link(req: Fs, path: string, newPath: string): void
    /** Non-blocking symlink */
    function symlink(req: Fs, path: string, newPath: string, flags: number, callback: (error: Error) => void): Fs
    /** Blocking symlink */
    function symlink(req: Fs, path: string, newPath: string, flags: number): void
    /** Non-blocking readlink */
    function readlink(req: Fs, path: string, callback: (error: Error, path: string) => void): Fs
    /** Blocking readlink */
    function readlink(req: Fs, path: string): string
    /** Non-blocking realpath */
    function realpath(req: Fs, path: string, callback: (error: Error, path: string) => void): Fs
    /** Blocking realpath */
    function realpath(req: Fs, path: string): string
    /** Non-blocking chown */
    function chown(req: Fs, path: string, uid: number, gid: number, callback: (error: Error) => void): Fs
    /** Blocking chown */
    function chown(req: Fs, path: string, uid: number, gid: number): void
    /** Non-blocking fchown */
    function fchown(req: Fs, fd: number, uid: number, gid: number, callback: (error: Error) => void): Fs
    /** Blocking fchown */
    function fchown(req: Fs, fd: number, uid: number, gid: number): void
    /** Non-blocking lchown */
    function lchown(req: Fs, path: string, uid: number, gid: number, callback: (error: Error) => void): Fs
    /** Blocking lchown */
    function lchown(req: Fs, path: string, uid: number, gid: number): void
  }
  /**
   * Asynchronous getaddrinfo(3).
   * See http://docs.libuv.org/en/v1.x/dns.html
   * @param node domain name or ip address
   * @param service service name or port number
   */
  function getaddrinfo(
    req: Getaddrinfo,
    onGetaddrinfo: (error: Error, results: Address[]) => void,
    node: string,
    service: string
  ): Getaddrinfo

  /** Gets the resident set size (RSS) for the current process. */
  function residentSetMemory(): number;

  /** Gets the current system uptime. */
  function uptime(): number;

  /** Gets the load average */
  function loadavg(): [number, number, number];

  /** Gets free memory information (in bytes). */
  function getFreeMemory(): number;

  /** Gets total memory information (in bytes). */
  function getTotalMemory(): number;

  /** 
   * Prints all handles to stderr
   */
  function printAllHandles(): void;

  /** This is the same as printAllHandles() except only active handles are printed. */
  function printActiveHandles(): void;

  /**
   * Returns the current high-resolution real time. This is expressed in 
   * nanoseconds. It is relative to an arbitrary time in the past. It is not 
   * related to the time of day and therefore not subject to clock drift. The 
   * primary use is for measuring performance between intervals.
   */
  function hrtime(): number

  /** Retrieves the environment variable specified by name. */
  function osGetenv(name: string): string
}
